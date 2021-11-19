import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';

import {
  HeaderModule,
  FooterModule,
} from './../../../../../shared-lib/src/public-api';

const layoutLibModules = [HeaderModule, FooterModule];

@NgModule({
  declarations: [DefaultComponent],
  imports: [CommonModule, ...layoutLibModules, DefaultRoutingModule],
  exports: [DefaultComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DefaultModule {}
