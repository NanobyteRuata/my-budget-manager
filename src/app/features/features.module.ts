import { NgModule } from '@angular/core';

import { FeaturesRoutingModule } from './features-routing.module';

import { FeaturesComponent } from './features.component';
import { NavComponent } from './components/nav/nav.component';

import { SharedModule } from '../shared/shared.module';
import { ToolbarModule } from 'primeng/toolbar';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [FeaturesComponent, NavComponent, LayoutComponent],
  imports: [
    SharedModule,
    FeaturesRoutingModule,
    ToolbarModule,
    SidebarModule,
    AvatarModule,
  ],
})
export class FeaturesModule {}
