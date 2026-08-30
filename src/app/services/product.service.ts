// app/services/product.service.ts
import { Injectable } from '@angular/core'

export interface Product {
  id: number
  name: string
  description: string
}

@Injectable({
  providedIn: 'root' // Inyección a nivel global
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Producto Alfa', description: 'Descripción de Alfa' },
    { id: 2, name: 'Producto Beta', description: 'Descripción de Beta' },
    { id: 3, name: 'Producto Gamma', description: 'Descripción de Gamma' }
  ]

  getProducts(): Product[] {
    return this.products
  }
}
