import { Component, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from '../../models/language.model';
import { LANGUAGES } from '../../../core/constants/languages.constant';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-language-changer',
  templateUrl: './language-changer.component.html',
  styleUrl: './language-changer.component.scss',
})
export class LanguageChangerComponent implements OnDestroy {
  selectedLanguage?: Language;

  languages: Language[] = LANGUAGES;

  languageChangeSub?: Subscription;

  constructor(private translateService: TranslateService) {
    this.applySelectedLanguage(this.translateService.store.currentLang);
    this.subscribeLanguageChange();
  }

  subscribeLanguageChange = (): void => {
    this.languageChangeSub = this.translateService.onLangChange.subscribe(
      (event) => this.applySelectedLanguage(event.lang)
    );
  };

  applySelectedLanguage = (value: string): void => {
    this.selectedLanguage =
      this.languages.find((l) => l.value === value) || this.languages[0];
  };

  onSelectedLanguageChange = (language: Language): void => {
    this.translateService.use(language.value);
    localStorage.setItem('language', language.value);
  };

  ngOnDestroy(): void {
    this.languageChangeSub?.unsubscribe();
  }
}
