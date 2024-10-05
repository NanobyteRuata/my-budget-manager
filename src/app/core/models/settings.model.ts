import { Language } from '../../shared/models/language.model';
import { LANGUAGES } from '../constants/languages.constant';
import { CURRENCIES } from '../constants/settings.constant';
import { Currency } from './common.model';

export enum FontSizes {
  XS = '8px',
  S = '10px',
  M = '12px',
  L = '14px',
  XL = '16px',
}
export type FontSizeType = `${FontSizes}`;

export enum Themes {
  Light = 'light',
  Dark = 'dark',
}
export type ThemeTypes = `${Themes}`;

export class Settings {
  currency: Currency;
  theme: ThemeTypes;
  language: Language;
  fontSize: FontSizeType;

  constructor({
    currency = CURRENCIES[0],
    theme = Themes.Dark,
    language = LANGUAGES[0],
    fontSize = FontSizes.M,
  }: Partial<Settings> = {}) {
    this.currency = currency;
    this.theme = theme;
    this.language = language;
    this.fontSize = fontSize;
  }

  public static fromDto(settingsDto: SettingsDto): Settings {
    const settings = new Settings();

    settings.currency =
      CURRENCIES.find((c) => c.short === settingsDto.currency) ||
      settings.currency;
    settings.language =
      LANGUAGES.find((l) => l.value === settingsDto.language) ||
      settings.language;

    if ((Object.values(Themes) as ThemeTypes[]).includes(settingsDto.theme)) {
      settings.theme = settingsDto.theme;
    }

    if (
      (Object.values(FontSizes) as FontSizeType[]).includes(
        settingsDto.fontSize
      )
    ) {
      settings.fontSize = settingsDto.fontSize;
    }

    return settings;
  }

  toDto(): SettingsDto {
    return {
      currency: this.currency.short,
      theme: this.theme,
      language: this.language.value,
      fontSize: this.fontSize,
    };
  }
}

export interface SettingsDto {
  currency: string;
  theme: ThemeTypes;
  language: string;
  fontSize: FontSizeType;
}
