import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
<<<<<<< HEAD

const routes: Routes = [
  {path:'', component:AccueilComponent},
  // children:[
  //   {path:'conges', component:CongesComponet}
  // ]},
=======
<<<<<<< HEAD
import { AproposComponent } from './apropos/apropos.component';


const routes: Routes = [
  { path: 'a-propos', component: AproposComponent },
  {path:'', component:AccueilComponent, 
    children:[
      // { path: 'a-propos', component: AproposComponent }
    ]
  }
=======
import { CongesComponent } from './conges/conges.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  {
    path: '', component: AccueilComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'conges', component: CongesComponent },
      { path: 'faq', component: FaqComponent }
    ]
  },
>>>>>>> 8309cb4b60d15c704f39da0f6ce53c1ed6dc099a
>>>>>>> gGabriel
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { }
