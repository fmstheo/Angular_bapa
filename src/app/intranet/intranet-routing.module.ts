import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CongesComponent } from './conges/conges.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  {
    path: '', component: AccueilComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'conges', component: CongesComponent },
      { path: 'faq', component: FaqComponent },
      { path: 'administration', loadChildren: './administration/administration.module#AdministrationModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { }