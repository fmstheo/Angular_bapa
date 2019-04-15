import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
<<<<<<< HEAD
import { FaqComponent } from './faq/faq.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FaqDetailComponent } from './faq/faq-detail/faq-detail.component';
import { AdminGuard } from '../services/admin.guard';

const routes: Routes = [
  {path:'', component:AccueilComponent, 
    children:[
      {path:'', component:DashboardComponent},
      {path:'faq', component:FaqComponent, canActivate:[AdminGuard]},
      {path:'faq/:bertrand', component:FaqDetailComponent}
    ]
  }
=======
import { ManagerComponent } from './manager/manager.component';


const routes: Routes = [
  {path:'', component:AccueilComponent,
children:[
  //{path:'conges', component:CongesComposant},
  {path:'manager', component:ManagerComponent}
]}
>>>>>>> 34d97abfd1a0a58a1a968978ab430c67722f43d8
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { }
