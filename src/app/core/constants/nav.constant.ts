import { MenuItem } from 'primeng/api';

export const NAV_ITEMS: MenuItem[] = [
  {
    label: 'DASHBOARD.TITLE',
    icon: 'pi pi-objects-column',
    routerLink: '/',
    routerLinkActiveOptions: { exact: true },
  },
  {
    label: 'ACCOUNTS.TITLE',
    icon: 'pi pi-building-columns',
    routerLink: '/accounts',
    routerLinkActiveOptions: { exact: false },
  },
  {
    label: 'SETTINGS.TITLE',
    icon: 'pi pi-cog',
    routerLink: '/settings',
    routerLinkActiveOptions: { exact: false },
  },
];
