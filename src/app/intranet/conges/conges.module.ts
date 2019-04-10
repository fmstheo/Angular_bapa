import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { DdeCongesComponent } from './dde-conges/dde-conges.component';
import { ConsultCongesComponent } from './consult-conges/consult-conges.component';
import { CongesExceptionnelsComponent } from './conges-exceptionnels/conges-exceptionnels.component';
import { AccueilCongesComponent } from './accueil-conges/accueil-conges.component';

@NgModule({
  declarations: [
  DdeCongesComponent,
  ConsultCongesComponent,
  CongesExceptionnelsComponent,
  AccueilCongesComponent],

  imports: [
    CommonModule,
    
    FormsModule,
    HttpClientModule
  ],

  providers:[],

})

export class CongesModule { }
