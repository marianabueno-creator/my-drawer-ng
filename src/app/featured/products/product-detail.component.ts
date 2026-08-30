import { Component } from '@angular/core'

@Component({
  selector: 'ns-product-detail',
  template: `
    <ActionBar title="Detalle del Producto"></ActionBar>
    <StackLayout>
      <Label text="Vista de detalle adicional" class="h2"></Label>
    </StackLayout>
  `
})
export class ProductDetailComponent {}
