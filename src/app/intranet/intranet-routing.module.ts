import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AproposComponent } from './apropos/apropos.component';
import { AdministrationModule } from './administration/administration.module';
import { AdministrationComponent } from './administration/administration/administration.component';


const routes: Routes = [
  
  { path: 'a-propos', component: AproposComponent },
  // { path: "administration", component: AdministrationComponent },
  {
    path: '', component: AccueilComponent,
    children: [
      {path:'administration', loadChildren:'./administration/administration.module#AdministrationModule'},
    ]
  },
  
  // {path: 'administration', component: AdministrationModule,
  //   children: [
  //     { path: "administration", component: AdministrationComponent }
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { }
