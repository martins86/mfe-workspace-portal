import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';

import { SharedLibModule } from '../../../../../shared-lib/src/lib/shared-lib.module';

@NgModule({
  declarations: [DefaultComponent],
  imports: [CommonModule, SharedLibModule, DefaultRoutingModule],
  exports: [DefaultComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DefaultModule {}
