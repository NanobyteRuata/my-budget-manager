import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Themes, ThemeTypes } from '../models/theme.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ThemeService {
  DEFAULT_THEME = Themes.Light;

  private _activeTheme = new BehaviorSubject<ThemeTypes>(this.DEFAULT_THEME);

  activeTheme$ = this._activeTheme.asObservable();

  constructor(@Inject(DOCUMENT) private document: Document) {
    const theme = this.validateTheme(localStorage.getItem('theme'));
    this.setTheme(theme);
  }

  validateTheme(savedTheme: string | null): ThemeTypes {
    if (savedTheme && Object.values(Themes).find(t => t === savedTheme)) {
      return savedTheme as ThemeTypes;
    }

    return this.DEFAULT_THEME;
  }

  getTheme(): ThemeTypes {
    return this._activeTheme.getValue();
  }

  setTheme(theme: ThemeTypes): void {
    const themeLink = this.document.getElementById(
      'app-theme'
    ) as HTMLLinkElement;

    // light.css and dark.css files are imported in angular.json -> styles
    if (themeLink) {
      themeLink.href = theme + '.css';
      localStorage.setItem('theme', theme);
      this._activeTheme.next(theme);
    }
  }

  toggleTheme(): void {
    const themes = Object.values(Themes);
    const otherTheme = themes.find(theme => theme !== this.getTheme());
    this.setTheme(otherTheme ?? this.DEFAULT_THEME);
  }
}
