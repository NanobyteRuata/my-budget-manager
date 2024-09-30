import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';

import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DropdownModule } from 'primeng/dropdown';

import { BtnThemeToggleComponent } from './components/btn-theme-toggle/btn-theme-toggle.component';
import { LanguageChangerComponent } from './components/language-changer/language-changer.component';

const importExports = [
  CommonModule,
  FormsModule,
  TranslateModule,
  TooltipModule,
  ButtonModule,
  InputTextModule,
  MenuModule,
  InputSwitchModule,
  DropdownModule,
];

@NgModule({
  declarations: [BtnThemeToggleComponent, LanguageChangerComponent],
  imports: [...importExports],
  exports: [
    ...importExports,
    BtnThemeToggleComponent,
    LanguageChangerComponent,
  ],
})
export class SharedModule {}
