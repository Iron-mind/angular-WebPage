import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

   @Input() product: Product= {
    name: 'Product 1',
    price: 0,
    description:'',
    image: './assets/imgs/product-1.jpg'
  }

  @Output() addedProduct = new EventEmitter<Product>()

  constructor() { }

  ngOnInit(): void {
  }
  addToCart(){
    this.addedProduct.emit(this.product)
  }

}
