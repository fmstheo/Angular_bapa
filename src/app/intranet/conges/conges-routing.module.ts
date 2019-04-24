import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemandeDeCongesComponent } from './demande-de-conges/demande-de-conges.component';
import { CongesComponent } from './conges/conges.component';
import { RecuperationComponent } from './recuperation/recuperation.component';
import { CongesExeptionnelsComponent } from './conges-exeptionnels/conges-exeptionnels.component';
import { ConsulterDemandeComponent } from './consulter-demande/consulter-demande.component';


const routes: Routes = [
  {
    path: "", component: CongesComponent,
    children: [
      { path: "", component: DemandeDeCongesComponent },
      { path: "demande-conges", component: DemandeDeCongesComponent },
      { path: "recuperation", component: RecuperationComponent },
      { path: "conges-exeptionnels", component: CongesExeptionnelsComponent },
      { path: "consulter-demande", component: ConsulterDemandeComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CongesRoutingModule { }

