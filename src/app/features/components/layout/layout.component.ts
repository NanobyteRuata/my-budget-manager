import { Component } from '@angular/core';
import { Auth, User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationService, MenuItem } from 'primeng/api';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  currentUser: User | null = null;
  currentUserPhotoURL?: string;

  profileActions: MenuItem[] = [
    {
      label: 'FEATURES.SIGN_OUT',
      icon: 'pi pi-sign-out',
      command: () => this.onLogoutClick(),
    },
  ];

  constructor(
    private auth: Auth,
    private router: Router,
    private confirmationService: ConfirmationService,
    private translateService: TranslateService,
    public themeService: ThemeService
  ) {
    this.getCurrentUser();
  }

  getCurrentUser = (): void => {
    this.auth.authStateReady().then(() => {
      this.currentUser = this.auth.currentUser;

      // using this.currentUser.photoURL directly in the template causes 421: Too Many Requests Error
      // So I have to copy and keep it in a new state
      if (this.currentUser?.photoURL) {
        this.currentUserPhotoURL = structuredClone(this.currentUser.photoURL);
      }
    });
  };

  onLogoutClick = (): void => {
    const toTranslate = [
      'FEATURES.SIGN_OUT',
      'FEATURES.SIGN_OUT_CONFIRM_MESSAGE',
      'COMMON.YES',
      'COMMON.NO',
    ];
    this.translateService.get(toTranslate).subscribe({
      next: (translatedValues) => {
        this.confirmationService.confirm({
          message: translatedValues['FEATURES.SIGN_OUT_CONFIRM_MESSAGE'],
          header: translatedValues['FEATURES.SIGN_OUT'],
          icon: 'pi pi-sign-out',
          acceptButtonStyleClass: 'p-button-danger p-button-text',
          rejectButtonStyleClass: 'p-button-text',
          acceptIcon: 'none',
          rejectIcon: 'none',
          acceptLabel: translatedValues['COMMON.YES'],
          rejectLabel: translatedValues['COMMON.NO'],
          accept: () => {
            this.auth.signOut().then(() => this.redirectToLogin());
          },
        });
      },
    });
  };

  redirectToLogin = (): void => {
    this.router.navigateByUrl('/login');
  };
}
