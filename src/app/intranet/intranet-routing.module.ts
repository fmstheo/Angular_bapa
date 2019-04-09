import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CongesComponent } from './conges/conges.component';

const routes: Routes = [
  {path:'',component:AccueilComponent,
children:[
  {path:'conges', component:CongesComponent}
]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { }
