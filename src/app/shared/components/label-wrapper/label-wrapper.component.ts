import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label-wrapper',
  templateUrl: './label-wrapper.component.html',
  styleUrl: './label-wrapper.component.scss',
})
export class LabelWrapperComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: false }) required: boolean = false;
  @Input({ required: false }) error?: string;
}
