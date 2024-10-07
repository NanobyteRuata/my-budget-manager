import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Currency } from '../../../core/models/common.model';
import { CURRENCIES } from '../../../core/constants/settings.constant';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';

@Component({
  selector: 'app-dropdown-currency',
  templateUrl: './dropdown-currency.component.html',
  styleUrl: './dropdown-currency.component.scss',
})
export class DropdownCurrencyComponent {
  @Input({ required: true }) value!: Currency;
  @Input() placeholder: string = '';
  @Input() disabled: any;

  @Output() valueChange = new EventEmitter<Currency>();

  currencies: Currency[] = CURRENCIES;
  suggestions: Currency[] = [];

  search = (event: AutoCompleteCompleteEvent): void => {
    this.suggestions = this.currencies.filter((currency) => {
      const queryLowerCase = event.query.toLowerCase();

      return (
        currency.country.toLowerCase().includes(queryLowerCase) ||
        currency.short.toLowerCase().includes(queryLowerCase) ||
        currency.name.toLowerCase().includes(queryLowerCase)
      );
    });
  };
}
