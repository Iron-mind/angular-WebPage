import { Component } from '@angular/core';
import { Product } from './component.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   imgParent='';
   onLoadImg(msg:string){
    console.log('Imagen cargada, alert desde el padre. '+msg);
   }

}
