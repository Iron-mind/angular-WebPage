import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
let url ='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.uqs5SxPZC4LpEP59r_6R1gHaHa%26pid%3DApi&f=1';
@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {
  valueInit: string = 'Valor init';
  @Input() src: string='';
  //estoy creando un evento para que se ejecute una función en el padre
  @Output() imgLoaded = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onLoadImg(){
    console.log('Imagen default cargada');
  }
  imgError() {
    // lo podemos emitir con informacion en en los parametrso del emit
    this.imgLoaded.emit('img hijo no carga') //lo emitimos pa que lo escuche el padre
    this.src =url
  }

}
