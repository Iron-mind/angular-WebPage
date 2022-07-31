import { Component } from '@angular/core';
import { Product } from './models/product.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title= 'my-store'
   imgParent='';
   products:Product[] =[{
    name: 'Product 1',
    price: 333,
    description:'Eso es un producto',
    image: './assets/imgs/product-1.jpg'
   },
    {
    name: 'Product 2',
    price: 4000,
    description:' Eso es otro producto',
    image: './assets/imgs/product-1.jpg'
    },
    {
      name: 'Product 2',
      price: 4000,
      description:' Eso es otro producto',
      image: './assets/imgs/product-1.jpg'
    }
    ]

   onLoadImg(msg:string){
    console.log('Imagen cargada, alert desde el padre. '+msg);
   }

}
