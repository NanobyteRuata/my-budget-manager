import { NgModule } from '@angular/core';
import { AccountsComponent } from './accounts.component';
import { SharedModule } from '../../../shared/shared.module';
import { AccountsRoutingModule } from './accounts-routing.module';

@NgModule({
  declarations: [AccountsComponent],
  imports: [SharedModule, AccountsRoutingModule],
})
export class AccountsModule {}
