import { NgModule } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { environment } from '../../environments/environment';
import { ConfirmationService, MessageService } from 'primeng/api';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { NotificationService } from './services/notification.service';
import { SettingsService } from './services/settings.service';
import { AccountsService } from './services/accounts.service';
import { ConfirmDialogService } from './services/confirm-dialog.service';

@NgModule({
  providers: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => getMessaging()),
    provideStorage(() => getStorage()),
    provideHttpClient(withInterceptorsFromDi()),
    ThemeService,
    MessageService,
    ConfirmationService,
    NotificationService,
    SettingsService,
    AccountsService,
    ConfirmDialogService,
  ],
})
export class CoreModule {}
