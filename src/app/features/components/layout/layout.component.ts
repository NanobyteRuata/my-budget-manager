import { Component } from '@angular/core';
import { Auth, User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ThemeService } from '../../../core/services/theme.service';
import { ConfirmDialogService } from '../../../core/services/confirm-dialog.service';

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
    private confirmDialogService: ConfirmDialogService,
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

  onLogoutClick = async (): Promise<void> => {
    const isConfirmed = await this.confirmDialogService.danger(
      'FEATURES.SIGN_OUT',
      'FEATURES.SIGN_OUT_CONFIRM_MESSAGE',
      'pi pi-sign-out'
    );

    if (!isConfirmed) return;

    await this.auth.signOut();
    this.redirectToLogin();
  };

  redirectToLogin = (): void => {
    this.router.navigateByUrl('/login');
  };
}
