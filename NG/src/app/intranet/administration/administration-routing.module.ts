import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionUtilisateurComponent } from './gestion-utilisateur/gestion-utilisateur.component'
import { ContratTravailComponent } from './contrat-travail/contrat-travail.component';
import { EmployeComponent } from './gestion-utilisateur/employe/employe.component';
import { AdministrationGuard } from 'src/app/services/administration.guard';
import { PersonnelComponent } from './personnel/personnel.component';

const routes: Routes = [
  // {
  //   path: '', component: AccueilAdminComponent,
  //   children: [
  //     { path: '', component: GestionUtilisateurComponent },
  //     { path: 'contrat-travail', component: ContratTravailComponent },
  //   ]
  // },
  { path: '', component: GestionUtilisateurComponent },
  // { path: '', redirectTo: 'users' },
  { path: 'contrat-travail', component: ContratTravailComponent, canActivate:[AdministrationGuard] },
  { path:'personnel', component: PersonnelComponent },
  { path: ':idEmploye', component: EmployeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
