import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent {
  @Input() label!: string;
  @Input() hasIcon!: boolean;
  @Input() iconLocation!: string;
  @Input() iconType!: string;
  @Input() buttonType!: string;
  @Input() size!: string;

  constructor() {}
}
