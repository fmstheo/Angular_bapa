import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { FaqComponent } from './faq/faq.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FaqDetailComponent } from './faq/faq-detail/faq-detail.component';
<<<<<<< HEAD
import { AdminGuard } from '../services/admin.guard';
=======
import { ManagerComponent } from './manager/manager.component';
>>>>>>> 51ea8e5226f8b3721c67204c2ca0ecae8a8994ce

const routes: Routes = [
  {path:'', component:AccueilComponent, 
    children:[
      {path:'', component:DashboardComponent},
<<<<<<< HEAD
      {path:'faq', component:FaqComponent, canActivate:[AdminGuard]},
=======
      {path:'faq', component:FaqComponent},
      {path:'manager', component:ManagerComponent},
>>>>>>> 51ea8e5226f8b3721c67204c2ca0ecae8a8994ce
      {path:'faq/:bertrand', component:FaqDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { }
