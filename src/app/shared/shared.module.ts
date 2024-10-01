import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';

import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DropdownModule } from 'primeng/dropdown';

import { BtnThemeToggleComponent } from './components/btn-theme-toggle/btn-theme-toggle.component';
import { LanguageChangerComponent } from './components/language-changer/language-changer.component';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './i18n/', '.json');
}

const translateModuleWithConfig = TranslateModule.forChild({
  defaultLanguage: 'en',
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient],
  },
});

const importExports = [
  CommonModule,
  FormsModule,
  TooltipModule,
  ButtonModule,
  InputTextModule,
  MenuModule,
  InputSwitchModule,
  DropdownModule,
  TranslateModule,
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
