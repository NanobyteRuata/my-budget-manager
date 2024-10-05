import { Component, OnDestroy } from '@angular/core';
import {
  FontSizes,
  FontSizeType,
  Settings,
} from '../../../core/models/settings.model';
import { CURRENCIES } from '../../../core/constants/settings.constant';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { NotificationService } from '../../../core/services/notification.service';
import { SettingsService } from '../../../core/services/settings.service';
import { Subscription } from 'rxjs';
import { Themes, ThemeTypes } from '../../../core/models/settings.model';
import { LANGUAGES } from '../../../core/constants/languages.constant';
import { Language } from '../../../shared/models/language.model';
import { Currency } from '../../../core/models/common.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent implements OnDestroy {
  currencies: Currency[] = CURRENCIES;
  currencySuggestions: any[] = [];

  themes: ThemeTypes[] = Object.values(Themes);
  languages: Language[] = LANGUAGES;
  fontSizes: FontSizeType[] = Object.values(FontSizes);

  settings?: Settings;

  errors: { [key: string]: string } = {};

  subSink: Subscription[] = [];

  constructor(
    private settingsService: SettingsService,
    private notificationService: NotificationService
  ) {
    this.getSettings();
  }

  getSettings = async (): Promise<void> => {
    const sub = this.settingsService.settings$.subscribe((settings) => {
      this.settings = settings ?? new Settings();
    });

    this.subSink.push(sub);
  };

  searchCurrency = (event: AutoCompleteCompleteEvent): void => {
    this.currencySuggestions = this.currencies.filter((currency) => {
      const queryLowerCase = event.query.toLowerCase();

      return (
        currency.country.toLowerCase().includes(queryLowerCase) ||
        currency.short.toLowerCase().includes(queryLowerCase) ||
        currency.name.toLowerCase().includes(queryLowerCase)
      );
    });
  };

  isValid = (): boolean => {
    this.errors = {};

    if (!this.settings?.currency) {
      this.errors['currency'] = 'SETTINGS.DEFAULT_CURRENCY_ERROR';
    }

    if (!this.settings?.theme) {
      this.errors['theme'] = 'SETTINGS.DEFAULT_THEME_ERROR';
    }

    if (!this.settings?.language) {
      this.errors['language'] = 'SETTINGS.DEFAULT_LANGUAGE_ERROR';
    }

    if (!this.settings?.fontSize) {
      this.errors['fontSize'] = 'SETTINGS.FONT_SIZE_ERROR';
    }

    return Object.values(this.errors).length === 0;
  };

  preview = (): void => {};

  save = async (): Promise<void> => {
    if (!this.settings || !this.isValid()) return;
    await this.settingsService.saveSettings(this.settings);
  };

  ngOnDestroy = (): void => {
    this.subSink.forEach((sub) => sub.unsubscribe());
  };
}
