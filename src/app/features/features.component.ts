import { Component } from '@angular/core';
import { SettingsService } from '../core/services/settings.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent {
  constructor(private settingsService: SettingsService) {}
}
