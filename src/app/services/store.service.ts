import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  myShoppingCart:Product[] = [];
  total=0

  constructor() { }
  calculateTotal(){
    return this.myShoppingCart.reduce((acc,curr)=>acc+curr.price,0)
  }
  onAddToShoppingCard(product: Product){

    this.myShoppingCart.push(product)
    this.calculateTotal()

  }

  getMyShoppingCart(){
    return this.myShoppingCart
  }

}
