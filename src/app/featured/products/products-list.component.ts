import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application, isAndroid } from '@nativescript/core'
import { ProductService, Product } from '~/app/services/product.service'

@Component({
  selector: 'ns-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: Product[] = []
  platformMessage: string = 'Ejecutando en iOS / Otro'

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // Inyección de datos desde el servicio
    this.products = this.productService.getProducts()

    // Lógica condicional exclusiva para Android (Requisito 10)
    if (isAndroid) {
      this.platformMessage = '¡Hola desde Android! (Variable asignada solo en Android)'
    }
  }

  // Método para abrir/cerrar el Side Drawer
  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}
