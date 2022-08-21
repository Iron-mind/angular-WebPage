import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [{
    name: 'Product 1',
    price: 333,
    description: 'Eso es un producto',
    image: './assets/imgs/product-1.jpg'
  },
  {
    name: 'Product 2',
    price: 4000,
    description: ' Eso es otro producto',
    image: './assets/imgs/product-1.jpg'
  },
  {
    name: 'Product 2',
    price: 4000,
    description: ' Eso es otro producto',
    image: './assets/imgs/product-1.jpg'
  }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
