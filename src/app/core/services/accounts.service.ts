import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Account, AccountDto } from '../models/accounts.model';
import { Auth } from '@angular/fire/auth';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  Firestore,
  getDocs,
  query,
  setDoc,
  where,
} from '@angular/fire/firestore';
import { NotificationService } from './notification.service';

@Injectable()
export class AccountsService implements OnDestroy {
  private _accounts = new BehaviorSubject<Account[]>([]);
  accounts$ = this._accounts.asObservable();
  subSink: Subscription[] = [];

  constructor(
    private auth: Auth,
    private firestore: Firestore,
    private notificationService: NotificationService
  ) {
    this.checkUserAndLoadAccounts();
  }

  checkUserAndLoadAccounts = (): void => {
    this.auth.onAuthStateChanged((user) => user && this.loadAccounts());
  };

  loadAccounts = async (): Promise<void> => {
    const user = this.auth.currentUser;
    if (!user) return;

    const accountsSnapshot = await getDocs(
      query(
        collection(this.firestore, 'accounts'),
        where('uid', '==', user.uid)
      )
    );

    const accounts = accountsSnapshot.docs.map((docSnapshot) => {
      const accountDto = docSnapshot.data() as AccountDto;
      return Account.fromDto(accountDto, docSnapshot.id);
    });

    this._accounts.next(accounts);
  };

  createAccount = async (account: Account): Promise<Account | undefined> => {
    try {
      const user = this.auth.currentUser;
      if (!user) throw Error('User not logged in!');

      const newAccountReference = await addDoc(
        collection(this.firestore, 'accounts'),
        account.toDto()
      );
      account.id = newAccountReference.id;

      this._accounts.next([account, ...this._accounts.value]);
      this.notificationService.success(
        'ACCOUNTS.SUCCESSFUL_TITLE',
        'ACCOUNTS.CREATE_SUCCESSFUL_MESSAGE'
      );
      return account;
    } catch (error) {
      console.error('Failed to create account:', error);
      this.notificationService.error(
        'ACCOUNTS.FAILED_TITLE',
        'ACCOUNTS.CREATE_FAILED_MESSAGE'
      );
      return undefined;
    }
  };

  editAccount = async (
    updatedAccount: Account
  ): Promise<Account | undefined> => {
    try {
      if (!updatedAccount.id) throw Error('ID is required to update');

      await setDoc(
        doc(this.firestore, 'accounts', updatedAccount.id),
        updatedAccount.toDto()
      );

      this.notificationService.success(
        'ACCOUNTS.SUCCESSFUL_TITLE',
        'ACCOUNTS.UPDATE_SUCCESSFUL_MESSAGE'
      );

      const updatedAccounts = this._accounts.value.map((account) =>
        account.id === updatedAccount.id ? updatedAccount : account
      );
      this._accounts.next(updatedAccounts);

      return updatedAccount;
    } catch (error) {
      this.notificationService.error(
        'ACCOUNTS.FAILED_TITLE',
        'ACCOUNTS.UPDATE_FAILED_MESSAGE'
      );
      return undefined;
    }
  };

  deleteAccount = async (id: string): Promise<boolean> => {
    try {
      await deleteDoc(doc(this.firestore, 'accounts', id));

      this.notificationService.success(
        'ACCOUNTS.SUCCESSFUL_TITLE',
        'ACCOUNTS.DELETE_SUCCESSFUL_MESSAGE'
      );

      const updatedAccounts = this._accounts.value.filter(
        (account) => account.id !== id
      );
      this._accounts.next(updatedAccounts);

      return true;
    } catch (error) {
      this.notificationService.error(
        'ACCOUNTS.FAILED_TITLE',
        'ACCOUNTS.DELETE_FAILED_MESSAGE'
      );
      return false;
    }
  };

  ngOnDestroy = (): void => {
    this.subSink.forEach((sub) => sub.unsubscribe());
  };
}
