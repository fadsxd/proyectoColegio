import { Component } from '@angular/core';

import { Nombre } from './models/nombre';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  nombreArray : Nombre[] = [
    {id:1 ,name : "juan",comment:"Bolivia"}
  ];

  selectedNombre : Nombre = new  Nombre();

  openEdit(nombre:Nombre){
    this.selectedNombre = nombre;
    
  }
  addOrEdit(){
    if(this.selectedNombre.id === 0)
    {
      this.selectedNombre.id = this.nombreArray.length+1;
      this.nombreArray.push(this.selectedNombre);
      this.selectedNombre = new Nombre();
    }
    
  }
  
  delete(){
    this.nombreArray = this.nombreArray.filter(x=> x!= this.selectedNombre)
    this.selectedNombre = new Nombre();
  }



}
