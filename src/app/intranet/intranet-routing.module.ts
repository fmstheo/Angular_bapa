import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { FaqComponent } from './faq/faq.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccueilCongesComponent } from './conges/accueil-conges/accueil-conges.component';
import { CongesExceptionnelsComponent } from './conges/conges-exceptionnels/conges-exceptionnels.component';

const routes: Routes = [
  {path:'', component:AccueilComponent, 
    children:[
      {path:'', component:DashboardComponent},
      {path:'faq', component:FaqComponent},
      {path:'conges', component:AccueilCongesComponent},
      {path:'congesExceptionnels', component:CongesExceptionnelsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { }
