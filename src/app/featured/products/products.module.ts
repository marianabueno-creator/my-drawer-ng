import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular'

import { ProductsRoutingModule } from './products-routing.module'
import { ProductsListComponent } from './products-list.component'
import { ProductDetailComponent } from './product-detail.component'

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    ProductsRoutingModule
  ],
  declarations: [
    ProductsListComponent,
    ProductDetailComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ProductsModule {}
