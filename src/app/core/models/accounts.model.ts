import { Currency } from './common.model';

export interface Account {
  name: string;
  type: AccountType;
  balance: number;
  currency: Currency;
}

export interface AccountType {
  name: string;
  icon: string;
}
