import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { DdeCongesComponent } from './conges/dde-conges/dde-conges.component';



const routes: Routes = [
  {path:'',component:AccueilComponent,
  children:[
    {path:'conges',component:DdeCongesComponent}
  ]
  
  }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class IntranetRoutingModule { }
