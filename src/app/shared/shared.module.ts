import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const importExports = [CommonModule, FormsModule];

@NgModule({
  imports: [...importExports],
  exports: [...importExports],
})
export class SharedModule {}
