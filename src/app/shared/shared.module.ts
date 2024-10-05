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
import { AutoCompleteModule } from 'primeng/autocomplete';

import { BtnThemeToggleComponent } from './components/btn-theme-toggle/btn-theme-toggle.component';
import { LanguageChangerComponent } from './components/language-changer/language-changer.component';
import { LabelWrapperComponent } from './components/label-wrapper/label-wrapper.component';

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
  AutoCompleteModule,
];

@NgModule({
  declarations: [
    BtnThemeToggleComponent,
    LanguageChangerComponent,
    LabelWrapperComponent,
  ],
  imports: [...importExports],
  exports: [
    ...importExports,
    BtnThemeToggleComponent,
    LanguageChangerComponent,
    LabelWrapperComponent,
  ],
})
export class SharedModule {}
