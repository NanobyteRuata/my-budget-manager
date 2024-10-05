import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from '../../models/language.model';
import { LANGUAGES } from '../../../core/constants/languages.constant';

@Component({
  selector: 'app-language-changer',
  templateUrl: './language-changer.component.html',
  styleUrl: './language-changer.component.scss',
})
export class LanguageChangerComponent {
  selectedLanguage?: Language;

  languages: Language[] = LANGUAGES;

  constructor(private translateService: TranslateService) {
    this.getSelectedLanguage(this.translateService.store.currentLang);
  }

  getSelectedLanguage = (value: string): void => {
    this.selectedLanguage =
      this.languages.find((l) => l.value === value) || this.languages[0];
  };

  onSelectedLanguageChange = (language: Language): void => {
    this.translateService.use(language.value);
    localStorage.setItem('language', language.value);
  };
}
