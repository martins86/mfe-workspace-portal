import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { BtnAnimatedMenuToggleModule } from './../../component/btn-animated-menu-toggle/btn-animated-menu-toggle.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, BtnAnimatedMenuToggleModule],
  exports: [HeaderComponent],
})
export class HeaderModule { }
