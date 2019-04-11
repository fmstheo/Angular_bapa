import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { FaqComponent } from './faq/faq.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FaqDetailComponent } from './faq/faq-detail/faq-detail.component';

const routes: Routes = [
  {path:'', component:AccueilComponent, 
    children:[
      {path:'', component:DashboardComponent},
      {path:'faq', component:FaqComponent},
      {path:'faq/:bertrand', component:FaqDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { }
