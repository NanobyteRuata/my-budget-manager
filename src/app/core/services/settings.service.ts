import { Inject, Injectable } from '@angular/core';
import { Settings, SettingsDto } from '../models/settings.model';
import { BehaviorSubject } from 'rxjs';
import { Auth } from '@angular/fire/auth';
import { doc, Firestore, getDoc, setDoc } from '@angular/fire/firestore';
import { ThemeService } from './theme.service';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';
import { NotificationService } from './notification.service';

@Injectable()
export class SettingsService {
  private _settings = new BehaviorSubject<Settings | undefined>(undefined);
  settings$ = this._settings.asObservable();

  constructor(
    private auth: Auth,
    private firestore: Firestore,
    private themeService: ThemeService,
    private translateService: TranslateService,
    private notificationService: NotificationService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.auth.onAuthStateChanged((user) => user && this.loadSettings());
  }

  settings = (): Settings | undefined => {
    return this._settings.value;
  };

  private loadSettings = async (): Promise<void> => {
    if (!this.auth.currentUser) return;

    try {
      const settings = await this.fetchSettingsFromFirestore();
      this.applySettings(settings);
    } catch (error) {
      console.error('Failed to load settings:', error);
    }
  };

  private fetchSettingsFromFirestore = async (): Promise<Settings> => {
    const userUid = this.auth.currentUser?.uid;
    if (!userUid) throw new Error('User not authenticated');

    const settingsSnapshot = await getDoc(
      doc(this.firestore, 'settings', userUid)
    );
    return settingsSnapshot.exists()
      ? Settings.fromDto(settingsSnapshot.data() as SettingsDto)
      : new Settings();
  };

  saveSettings = async (settings: Settings): Promise<void> => {
    if (!this.auth.currentUser) return;

    try {
      const settingsDto = settings.toDto();
      await setDoc(
        doc(this.firestore, 'settings', this.auth.currentUser.uid),
        settingsDto
      );
      this.applySettings(settings);
      this.notificationService.success(
        'Success!',
        'Settings saved successfully'
      );
    } catch (error) {
      console.error('Failed to save settings:', error);
    }
  };

  private applySettings = (settings: Settings): void => {
    this._settings.next(settings);
    this.updateTheme(settings);
    this.updateLanguage(settings);
    this.updateFontSize(settings);
  };

  private updateTheme = (settings: Settings): void => {
    this.themeService.setTheme(
      settings.theme ?? this.themeService.DEFAULT_THEME
    );
  };

  private updateLanguage = (settings: Settings): void => {
    const languageValue = settings.language.value;
    this.translateService.use(languageValue);
    localStorage.setItem('language', languageValue);
  };

  private updateFontSize = (settings: Settings): void => {
    const fontSize = settings.fontSize;
    this.document.documentElement.style.setProperty('--font-size', fontSize);
    localStorage.setItem('fontSize', fontSize);
  };
}
