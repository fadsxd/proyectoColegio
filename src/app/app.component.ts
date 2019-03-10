import { Component } from '@angular/core';

import { Nombre } from './models/nombre';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoColegio';
  NombreArray : Nombre[] = [
    {id:1, nombre : "juan", country:"Bolivia"}
  ]
}
