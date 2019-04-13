import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';

import { AccueilCongesComponent } from './conges/accueil-conges/accueil-conges.component';
import { ConsultCongesComponent } from './conges/consult-conges/consult-conges.component';

const routes: Routes = [
  {path:'', component:AccueilComponent, 
    children:[
     
      {path:'conges',component:AccueilCongesComponent},
      {path:'consultation_conges',component:ConsultCongesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class IntranetRoutingModule { }
