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
  showImg = false;


    toggleCounter(){
      this.showImg = !this.showImg;
    }

   onLoadImg(msg:string){
    console.log('Imagen cargada, alert desde el padre. '+msg);
   }

}
