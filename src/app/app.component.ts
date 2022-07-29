import { Component } from '@angular/core';
import { Product } from './component.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  register={
    name: '',
    email: '',
    password: ''

  }
  widthImg:number=100;
  heightImg= 100;
  colorImg='red'
  title = 'my-store';
  products: Product[]=[{
    id: Math.random(),
    name: 'camisa',
    price: 10,
    description: ' camisa de algodon',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: Math.random(),
    name: 'pantalon',
    price: 20,
    description: ' pantalon de algodon',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: Math.random(),
    name:'curso de programación',
    price: 30,
    description: ' curso de programación',
    image:'https://cdn.sstatic.net/Img/teams/teams-illo-free-sidebar-promo.svg?v=47faa659a05e'
  },
  {
    id: Math.random(),
    name:'curso de programación',
    price: 30,
    description: ' curso de programación',
    image:'https://cdn.sstatic.net/Img/teams/teams-illo-free-sidebar-promo.svg?v=47faa659a05e'
  },
  {
    id: Math.random(),
    name:'curso de programación',
    price: 30,
    description: ' curso de programación',
    image:'https://cdn.sstatic.net/Img/teams/teams-illo-free-sidebar-promo.svg?v=47faa659a05e'
  }];
  product: Product={
    id: Math.random(),
    name: '',
    price: 0,
    description: '',
    image: ''
  };
  user={
    name: 'Juan',
    avatar: 'https://pngimg.com/uploads/avatar/avatar_PNG48.png?i=1',

  }
  onRegister(){}
  addProduct(){
    this.products.push(this.product);
    this.product={
      id: Math.random(),
      name: '',
      price: 0,
      description: '',
      image: ''
    };
  }

}
