import { Component, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { NAV_ITEMS } from '../../../core/constants/nav.constant';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent implements OnDestroy {
  isSidebarOpen: boolean = false;
  navItems: MenuItem[] = [];
  selectedNavItem?: MenuItem;

  routerNavigationChangeSubscription!: Subscription;

  constructor(
    private router: Router,
    private translateService: TranslateService
  ) {
    this.detectRouteChanges();
    this.initNav();
  }

  initNav = (): void => {
    this.translateService.onLangChange.subscribe({
      next: () => this.getNavItemsAndTranslate(),
    });
    this.getNavItemsAndTranslate().then();
  };

  getNavItemsAndTranslate = async (): Promise<void> => {
    let navItems: MenuItem[] = [];

    for (let navItem of NAV_ITEMS) {
      navItems.push({
        ...navItem,
        label: await this.getTranslation(navItem.label),
        command: () => this.toggleSidebar(false),
      });
    }

    this.navItems = navItems;
    this.setSelectedNav(this.router.url);
  };

  getTranslation = async (key?: string): Promise<string> => {
    if (!key) return '';

    return new Promise((resolve, reject) => {
      this.translateService.get(key).subscribe({
        next: (value) => resolve(value),
        error: (error) => {
          console.error(error);
          reject('');
        },
      });
    });
  };

  detectRouteChanges = (): void => {
    this.routerNavigationChangeSubscription = this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((navigationEnd) => this.setSelectedNav(navigationEnd.url));
  };

  setSelectedNav = (url: string): void => {
    this.selectedNavItem = this.navItems.find((n) => n.routerLink === url);
  };

  toggleSidebar = (open?: boolean): void => {
    this.isSidebarOpen = open ?? !this.isSidebarOpen;
  };

  ngOnDestroy = (): void => {
    this.routerNavigationChangeSubscription.unsubscribe();
  };
}
