import { ValidationErrors } from '@angular/forms';

export interface Currency {
  name: string;
  short: string;
  country: string;
}

export interface Validation {
  isValid: boolean;
  errors: ValidationErrors;
}
