import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ACCOUNT_TYPES } from '../../../../../core/constants/accounts.constant';
import { Auth } from '@angular/fire/auth';
import { SettingsService } from '../../../../../core/services/settings.service';
import { Subscription } from 'rxjs';
import { Settings } from '../../../../../core/models/settings.model';
import { Account } from '../../../../../core/models/accounts.model';
import { AccountsService } from '../../../../../core/services/accounts.service';

@Component({
  selector: 'app-dialog-account-details',
  templateUrl: './dialog-account-details.component.html',
  styleUrl: './dialog-account-details.component.scss',
})
export class DialogAccountDetailsComponent implements OnChanges, OnDestroy {
  @Input() account?: Account;
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  accountTypes = ACCOUNT_TYPES;
  yesNoOptions = [
    {
      label: 'Yes',
      value: true,
    },
    {
      label: 'No',
      value: false,
    },
  ];

  settings?: Settings;
  errors: { [key: string]: string } = {};

  isSaveLoading: boolean = false;

  subSink: Subscription[] = [];

  constructor(
    private auth: Auth,
    private accountsService: AccountsService,
    private settingsService: SettingsService
  ) {
    this.subscribeSettings();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['visible'] &&
      changes['visible'].currentValue &&
      !this.account
    ) {
      this.prepareNewAccountTemplate();
    }
  }

  subscribeSettings = (): void => {
    const sub = this.settingsService.settings$.subscribe((settings) => {
      this.settings = settings;
    });
    this.subSink.push(sub);
  };

  prepareNewAccountTemplate = (): void => {
    if (!this.auth.currentUser || !this.settings) return;

    this.account = new Account(this.auth.currentUser!.uid, {
      currency: this.settings!.currency,
    });
  };

  onSave = async (): Promise<void> => {
    if (!this.account) return;

    const { isValid, errors } = this.account.validate();

    if (!isValid) {
      this.errors = errors;
      return;
    }

    this.isSaveLoading = true;

    const success = await (this.account.id
      ? this.accountsService.editAccount(this.account)
      : this.accountsService.createAccount(this.account));

    if (success) {
      this.visibleChange.emit(false);
    }

    this.isSaveLoading = false;
  };

  ngOnDestroy(): void {
    this.subSink.forEach((sub) => sub.unsubscribe());
  }
}
