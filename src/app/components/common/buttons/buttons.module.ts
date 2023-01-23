import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ButtonsComponent],
  imports: [CommonModule, MatIconModule],
  exports: [ButtonsComponent],
})
export class ButtonsModule {}
