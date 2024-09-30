import { Component } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-btn-theme-toggle',
  templateUrl: './btn-theme-toggle.component.html',
  styleUrl: './btn-theme-toggle.component.scss',
})
export class BtnThemeToggleComponent {
  constructor(public themeService: ThemeService) {}
}
