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
import { TableModule } from 'primeng/table';
import { ColorPickerModule } from 'primeng/colorpicker';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownCurrencyComponent } from './components/dropdown-currency/dropdown-currency.component';
import { SelectButtonModule } from 'primeng/selectbutton';

const importExports = [
  CommonModule,
  FormsModule,
  TranslateModule,
  TooltipModule,
  ButtonModule,
  InputTextModule,
  InputSwitchModule,
  InputNumberModule,
  SelectButtonModule,
  MenuModule,
  DropdownModule,
  AutoCompleteModule,
  TableModule,
  ColorPickerModule,
  DialogModule,
];

const exportDeclarations = [
  BtnThemeToggleComponent,
  LanguageChangerComponent,
  LabelWrapperComponent,
  DropdownCurrencyComponent,
];

@NgModule({
  declarations: [...exportDeclarations],
  imports: [...importExports],
  exports: [...importExports, ...exportDeclarations],
})
export class SharedModule {}
