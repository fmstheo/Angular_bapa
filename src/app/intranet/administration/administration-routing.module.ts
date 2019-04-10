import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionUtilisateurComponent } from './gestion-utilisateur/gestion-utilisateur.component'
import { ContratTravailComponent } from './contrat-travail/contrat-travail.component';
import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component';

const routes: Routes = [
  {path:"test", component: ContratTravailComponent},
  {
    path: '', component: AccueilAdminComponent,
    children: [
      { path: '', component: GestionUtilisateurComponent },
      { path: 'contrat-travail', component: ContratTravailComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
