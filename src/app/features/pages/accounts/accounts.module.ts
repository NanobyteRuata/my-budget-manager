import { NgModule } from '@angular/core';
import { AccountsComponent } from './accounts.component';
import { SharedModule } from '../../../shared/shared.module';
import { AccountsRoutingModule } from './accounts-routing.module';
import { DialogAccountDetailsComponent } from './components/dialog-account-details/dialog-account-details.component';

@NgModule({
  declarations: [AccountsComponent, DialogAccountDetailsComponent],
  imports: [SharedModule, AccountsRoutingModule],
})
export class AccountsModule {}
