import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AproposComponent } from './apropos/apropos.component';
import { AdministrationModule } from './administration/administration.module';
import { AdministrationComponent } from './administration/administration/administration.component';
import { EspacecommunicationComponent } from './espacecommunication/espacecommunication.component';


const routes: Routes = [
  
  { path: 'a-propos', component: AproposComponent },
  // { path: "espace-communication", component: EspacecommunicationComponent  },
  {
    path: '', component: AccueilComponent,
    children: [
      {path:'administration', loadChildren:'./administration/administration.module#AdministrationModule'},
      { path: "espace-communication", component: EspacecommunicationComponent  }
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
