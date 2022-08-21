import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { mockProducts } from 'src/assets/mockdata';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  products: Product[] = mockProducts.map(elem=>({...elem, price:+elem.price })) as Product[];
  myShoppingCart:Product[] = [];
  total=0
  // [{
  //   name: 'Product 1',
  //   price: 333,
  //   description: 'Eso es un producto',
  //   image: './assets/imgs/product-1.jpg'
  // },
  // {
  //   name: 'Product 2',
  //   price: 4000,
  //   description: ' Eso es otro producto',
  //   image: './assets/imgs/product-1.jpg'
  // },
  // {
  //   name: 'Product 2',
  //   price: 4000,
  //   description: ' Eso es otro producto',
  //   image: './assets/imgs/product-1.jpg'
  // }
  // ]
  constructor() { }

  ngOnInit(): void {
  }

  calculateTotal(){
    this.total = this.myShoppingCart.reduce((acc,curr)=>acc+curr.price,0)
  }
  onAddToShoppingCard(product: Product){

    this.myShoppingCart.push(product)
    this.calculateTotal()

  }
}
