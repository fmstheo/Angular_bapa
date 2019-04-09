import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AproposComponent } from './apropos/apropos.component';


const routes: Routes = [
  { path: 'a-propos', component: AproposComponent },
  {path:'', component:AccueilComponent, 
    children:[
      // { path: 'a-propos', component: AproposComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { }
