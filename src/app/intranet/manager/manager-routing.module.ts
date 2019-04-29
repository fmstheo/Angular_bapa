import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilManagerComponent } from './accueil-manager/accueil-manager.component';
import { GestionManagerComponent } from './gestion-manager/gestion-manager.component';
import { ListeManagerComponent } from './liste-manager/liste-manager.component';

const routes: Routes = [
{
  path:"", component: AccueilManagerComponent,
  children: [
    { path: "", component: GestionManagerComponent},
    { path: "gestion-manager", component: GestionManagerComponent},
    { path: "liste-manager", component: ListeManagerComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }


// const routes: Routes = [
//   {
//     path: "", component: CongesComponent,
//     children: [
//       { path: "", component: DemandeDeCongesComponent },
//       { path: "demande-conges", component: DemandeDeCongesComponent },
//       { path: "recuperation", component: RecuperationComponent },
//       { path: "conges-exeptionnels", component: CongesExeptionnelsComponent },
//       { path: "consulter-demande", component: ConsulterDemandeComponent }

//     ]
//   }
// ];