import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { HttpBackend, HttpClient } from '@angular/common/http';

export function HttpLoaderFactory(httpBackend: HttpBackend) {
  return new TranslateHttpLoader(
    new HttpClient(httpBackend),
    './i18n/',
    '.json'
  );
}

const TranslateModuleWithConfig = TranslateModule.forRoot({
  defaultLanguage: 'en',
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpBackend],
  },
});

const appLevelPrimeNgModules = [ToastModule, ConfirmDialogModule];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    TranslateModuleWithConfig,
    CoreModule,
    ...appLevelPrimeNgModules,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
