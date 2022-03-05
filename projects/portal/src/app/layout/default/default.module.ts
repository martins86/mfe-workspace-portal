import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';

import { DefaultComponent } from './default.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [DefaultComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, DefaultRoutingModule],
  exports: [DefaultComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DefaultModule {}
