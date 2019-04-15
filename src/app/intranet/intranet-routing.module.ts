import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { FaqComponent } from './faq/faq.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FaqDetailComponent } from './faq/faq-detail/faq-detail.component';
import { AdminGuard } from '../services/admin.guard';
import { ManagerComponent } from './manager/manager.component';
import {AdministrationComponent} from './administration/administration.component';
import {EspaceComponent} from './espace/espace.component';

const routes: Routes = [
  {path:'', component:AccueilComponent, 
    children:[
      {path:'', component:DashboardComponent},
      {path:'faq', component:FaqComponent, canActivate:[AdminGuard]},
      {path:'faq', component:FaqComponent},
      {path:'manager', component:ManagerComponent},
      {path:'faq/:bertrand', component:FaqDetailComponent},
      {path:'administration', component:AdministrationComponent},
      {path:'espace', component:EspaceComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { }
