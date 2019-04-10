import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ManagerComponent } from './manager/manager.component';


const routes: Routes = [
  {path:'', component:AccueilComponent,
children:[
  //{path:'conges', component:CongesComposant},
  {path:'manager', component:ManagerComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { }
