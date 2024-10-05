import { Component } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(
    private auth: Auth,
    private router: Router,
    public translateService: TranslateService
  ) {}

  login = (): void => {
    signInWithPopup(this.auth, new GoogleAuthProvider())
      .then(() => this.handleLoginSuccess())
      .catch((error) => this.showError(error));
  };

  handleLoginSuccess = (): void => {
    this.redirectToDashboard();
  };

  redirectToDashboard = (): void => {
    this.router.navigateByUrl('/');
  };

  showError = (error: unknown): void => {
    console.error(error);
  };
}
