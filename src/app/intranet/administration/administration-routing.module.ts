import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionUtilisateurComponent } from './gestion-utilisateur/gestion-utilisateur.component'
import { ContratTravailComponent } from './contrat-travail/contrat-travail.component';
import { EmployeComponent } from './gestion-utilisateur/employe/employe.component';
import { AdministrationGuard } from 'src/app/services/administration.guard';

const routes: Routes = [
  // {
  //   path: '', component: AccueilAdminComponent,
  //   children: [
  //     { path: '', component: GestionUtilisateurComponent },
  //     { path: 'contrat-travail', component: ContratTravailComponent },
  //   ]
  // },
  { path: '', component: GestionUtilisateurComponent },
  { path: 'contrat-travail', component: ContratTravailComponent, canActivate:[AdministrationGuard] },
  { path: ':idEmploye', component: EmployeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
