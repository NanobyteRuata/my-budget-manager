import { ACCOUNT_TYPES } from '../constants/accounts.constant';
import { DEFAULT_COLOR } from '../constants/common.constant';
import { Currency, Validation } from './common.model';
import { CURRENCIES } from '../constants/settings.constant';
import { ValidationErrors } from '@angular/forms';

export interface AccountType {
  name: string;
  icon: string;
}

export class Account {
  id?: string;
  uid: string;
  name: string;
  type: AccountType;
  balance: number;
  currency: Currency;
  color: string;
  showInStats: boolean;

  constructor(uid: string, accountData: Partial<Account> = {}) {
    const {
      id,
      name = 'New Account',
      type = ACCOUNT_TYPES[0],
      balance = 0,
      currency = CURRENCIES[0],
      color = DEFAULT_COLOR,
      showInStats = true,
    } = accountData;

    this.id = id;
    this.uid = uid;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.currency = currency;
    this.color = color;
    this.showInStats = showInStats;
  }

  public static fromDto(accountDto: AccountDto, id?: string): Account {
    const { uid, type, currency, ...restDto } = accountDto;
    const currencyObj =
      CURRENCIES.find((cur) => cur.short === currency) ?? CURRENCIES[0];
    const typeObj =
      ACCOUNT_TYPES.find((at) => at.name === type) ?? ACCOUNT_TYPES[0];

    return new Account(uid, {
      id,
      type: typeObj,
      currency: currencyObj,
      ...restDto,
    });
  }

  validate = (): Validation => {
    const errors: ValidationErrors = {};

    if (!this.name || !this.name?.trim().length) {
      errors['name'] = 'Name is required';
    }

    if (!this.type) {
      errors['type'] = 'Type is required';
    }

    if (this.balance === null || this.balance === undefined) {
      errors['balance'] = 'Balance is required';
    }

    if (!this.currency) {
      errors['currency'] = 'Currency is required';
    }

    return {
      isValid: !Object.values(errors).length,
      errors,
    };
  };

  toDto = (): AccountDto => {
    return {
      uid: this.uid,
      name: this.name,
      type: this.type.name,
      balance: this.balance,
      currency: this.currency.short,
      color: this.color,
      showInStats: this.showInStats,
    };
  };
}

export interface AccountDto {
  id?: string;
  uid: string;
  name: string;
  type: string;
  balance: number;
  currency: string;
  color: string;
  showInStats: boolean;
}
