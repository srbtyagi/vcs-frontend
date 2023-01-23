import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {
  @Input() label!: string;
  @Input() hasIcon!: boolean;
  @Input() iconLocation!: string;
  @Input() iconType!: string;
  @Input() buttonType!: string;
  @Input() size!: string;

  constructor() {}

  ngOnInit(): void {}
}
