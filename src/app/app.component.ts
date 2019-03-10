import { Component } from '@angular/core';

import { Nombre } from './models/nombre';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  nombreArray : Nombre[] = [
    {id:1 ,name : "juan",country:"Bolivia"}
  ];

  selectedNombre : Nombre = new  Nombre();
}
