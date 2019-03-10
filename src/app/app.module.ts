import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router'; 

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactosComponent } from './contactos/contactos.component';
import { GestionComponent } from './gestion/gestion.component';

const Routes : Route[] = [
  {path : '', component: HomeComponent },
  {path : 'home', component: HomeComponent },
  {path : 'contactos', component: ContactosComponent},
  {path : 'gestion', component: GestionComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactosComponent,
    GestionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
