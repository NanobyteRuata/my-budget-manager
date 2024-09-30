import { Component } from '@angular/core';
import { ConfirmationService, MenuItem } from 'primeng/api';
import { ThemeService } from '../core/services/theme.service';
import { Auth, User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent {}
