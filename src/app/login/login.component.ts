import { Component } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(
    private auth: Auth,
    private router: Router,
    private messageService: MessageService,
    public translateService: TranslateService
  ) {}

  login = (): void => {
    signInWithPopup(this.auth, new GoogleAuthProvider())
      .then(this.handleLoginSuccess)
      .catch(this.showError);
  };

  handleLoginSuccess = (): void => {
    const toTranslate = ['COMMON.SUCCESS', 'LOGIN.SIGN_IN_SUCCESS'];
    this.translateService
      .get(toTranslate, { name: this.auth.currentUser?.displayName })
      .subscribe({
        next: (translatedValues) => {
          this.messageService.add({
            severity: 'success',
            summary: translatedValues['COMMON.SUCCESS'],
            detail: translatedValues['LOGIN.SIGN_IN_SUCCESS'],
          });
          this.redirectToDashboard();
        },
      });
  };

  redirectToDashboard = (): void => {
    this.router.navigateByUrl('/');
  };

  showError = (error: unknown): void => {
    console.error(error);
  };
}
