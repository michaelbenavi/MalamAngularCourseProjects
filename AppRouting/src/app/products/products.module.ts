import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { SubModuleComponent } from './sub-module/sub-module.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  declarations: [SubModuleComponent],

})
export class ProductsModule { }
