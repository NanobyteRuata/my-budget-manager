import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'accounts',
        loadChildren: () =>
          import('./pages/accounts/accounts.module').then(
            (m) => m.AccountsModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./pages/settings/settings.module').then(
            (m) => m.SettingsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
