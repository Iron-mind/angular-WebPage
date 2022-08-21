import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';
import { mockProducts } from 'src/assets/mockdata';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  products: Product[] = []//mockProducts.map(elem=>({...elem, price:+elem.price })) as Product[];
  myShoppingCart:Product[] = [];
  total=0
  today= new Date()
  date= new Date(2020,1,1)
  constructor(
    private storeService:StoreService,
    private productService:ProductsService
    ) {

      this.myShoppingCart = this.storeService.getMyShoppingCart()
    }

  ngOnInit(): void {
     this.productService.getAllProducts().subscribe(data=>{
        this.products = data
      console.log(data)
      })

  }

  onAddToShoppingCard(product: Product){

    this.storeService.onAddToShoppingCard(product)
    this.total = this.storeService.calculateTotal()

  }
}
