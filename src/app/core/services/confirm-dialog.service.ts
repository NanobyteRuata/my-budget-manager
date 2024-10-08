import { Injectable, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationService } from 'primeng/api';
import { Subscription } from 'rxjs';

@Injectable()
export class ConfirmDialogService implements OnDestroy {
  severityButtonClassMap = {
    success: 'p-button-success',
    info: 'p-button-info',
    danger: 'p-button-danger',
  };

  translationSubscription?: Subscription;

  constructor(
    private translateService: TranslateService,
    private confirmationService: ConfirmationService
  ) {}

  private confirm = async (
    severity: 'success' | 'info' | 'danger',
    title: string,
    message: string,
    icon: string,
    yes = 'COMMON.YES',
    no = 'COMMON.NO'
  ): Promise<boolean> => {
    const toTranslate = [title, message, yes, no];
    const iconClass = this.severityButtonClassMap[severity];

    return new Promise((resolve) => {
      this.translationSubscription = this.translateService
        .get(toTranslate)
        .subscribe({
          next: (translatedValues) => {
            this.confirmationService.confirm({
              header: translatedValues[title],
              message: translatedValues[message],
              icon,
              acceptButtonStyleClass: `${iconClass} p-button-text`,
              rejectButtonStyleClass: 'p-button-text',
              acceptIcon: 'none',
              rejectIcon: 'none',
              acceptLabel: translatedValues[yes],
              rejectLabel: translatedValues[no],
              accept: () => resolve(true),
              reject: () => resolve(false),
            });
          },
          error: (error) => {
            console.error(error);
            resolve(false);
          },
        });
    });
  };

  success = async (
    title: string,
    message: string,
    icon: string = 'pi pi-check',
    yes?: string,
    no?: string
  ): Promise<boolean> => this.confirm('success', title, message, icon, yes, no);

  info = async (
    title: string,
    message: string,
    icon: string = 'pi pi-info-circle',
    yes?: string,
    no?: string
  ): Promise<boolean> => this.confirm('info', title, message, icon, yes, no);

  danger = async (
    title: string,
    message: string,
    icon: string = 'pi pi-exclamation-triangle',
    yes?: string,
    no?: string
  ): Promise<boolean> => this.confirm('danger', title, message, icon, yes, no);

  ngOnDestroy(): void {
    this.translationSubscription?.unsubscribe();
  }
}
