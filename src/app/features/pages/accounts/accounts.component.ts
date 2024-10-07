import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Account, AccountType } from '../../../core/models/accounts.model';
import { Subscription } from 'rxjs';
import { AccountsService } from '../../../core/services/accounts.service';
import { Table } from 'primeng/table';
import { ACCOUNT_TYPES } from '../../../core/constants/accounts.constant';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.scss',
})
export class AccountsComponent implements OnInit, OnDestroy {
  @ViewChild('accountsTable', { static: false }) accountsTable!: Table;

  accountTypes: AccountType[] = ACCOUNT_TYPES;
  accounts: Account[] = [];

  editingAccount?: Account;
  isNewAccountDialogVisible: boolean = false;

  subSink: Subscription[] = [];

  constructor(
    private confirmationService: ConfirmationService,
    public accountsService: AccountsService
  ) {
    this.subscribeAccounts();
  }

  ngOnInit(): void {
    this.subscribeAccounts();
  }

  subscribeAccounts = (): void => {
    const sub = this.accountsService.accounts$.subscribe((accounts) => {
      this.accounts = accounts;
    });
    this.subSink.push(sub);
  };

  onNewClick = async (): Promise<void> => {
    delete this.editingAccount;
    this.isNewAccountDialogVisible = true;
  };

  editAccount = (account: Account): void => {
    if (!account.id) return;
    this.editingAccount = new Account(account.uid, account);
    this.isNewAccountDialogVisible = true;
  };

  deleteAccount = async (account: Account): Promise<void> => {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this account?',
      header: 'Delete',
      icon: 'pi pi-trash',
      acceptButtonStyleClass: 'p-button-danger p-button-text',
      rejectButtonStyleClass: 'p-button-text',
      acceptIcon: 'none',
      rejectIcon: 'none',
      acceptLabel: 'Yes',
      rejectLabel: 'No',
      accept: () => this.onDeleteConfirmed(account),
    });
  };

  onDeleteConfirmed = (account: Account): void => {
    if (!account.id) return;
    this.accountsService.deleteAccount(account.id);
  };

  ngOnDestroy(): void {
    this.subSink.forEach((sub) => sub.unsubscribe());
  }
}
