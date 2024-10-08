import { Injectable, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';

type MessageSeverity =
  | 'success'
  | 'error'
  | 'info'
  | 'warn'
  | 'contrast'
  | 'secondary';

@Injectable()
export class NotificationService implements OnDestroy {
  translationSubscription?: Subscription;

  constructor(
    private translateService: TranslateService,
    private messageService: MessageService
  ) {}

  private showNotification = (
    title: string,
    description: string,
    severity: MessageSeverity,
    variables?: { [key: string]: string }
  ): void => {
    const toTranslate = [title, description];
    this.translationSubscription = this.translateService
      .get(toTranslate, variables)
      .subscribe({
        next: (translatedValues) => {
          this.messageService.add({
            severity,
            summary: translatedValues[title],
            detail: translatedValues[description],
          });
        },
      });
  };

  notify = (
    severity: MessageSeverity,
    title: string,
    description: string,
    variables?: { [key: string]: string }
  ): void => {
    this.showNotification(title, description, severity, variables);
  };

  error = (
    title: string,
    description: string,
    variables?: { [key: string]: string }
  ): void => {
    this.notify('error', title, description, variables);
  };

  success = (
    title: string,
    description: string,
    variables?: { [key: string]: string }
  ): void => {
    this.notify('success', title, description, variables);
  };

  warning = (
    title: string,
    description: string,
    variables?: { [key: string]: string }
  ): void => {
    this.notify('warn', title, description, variables);
  };

  info = (
    title: string,
    description: string,
    variables?: { [key: string]: string }
  ): void => {
    this.notify('info', title, description, variables);
  };

  ngOnDestroy(): void {
    this.translationSubscription?.unsubscribe();
  }
}
