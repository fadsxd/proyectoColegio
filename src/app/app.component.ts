import { Component } from '@angular/core';

import { Nombre } from './models/nombre';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  nombreArray : Nombre[] = [
    {id:1 ,name : "Juan Mendoza",comment:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet rem saepe error, necessitatibus quia temporibus asperiores, sint, autem repudiandae voluptatum est cum quos obcaecati ducimus sequi libero officiis eos dicta."}
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
    if(confirm("Estas seguro de eliminar?"))
    this.nombreArray = this.nombreArray.filter(x=> x!= this.selectedNombre)
    this.selectedNombre = new Nombre();
  }



}
