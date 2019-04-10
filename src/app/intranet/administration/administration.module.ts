import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { ContratTravailComponent } from './contrat-travail/contrat-travail.component';
import { GestionUtilisateurComponent } from './gestion-utilisateur/gestion-utilisateur.component';
import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component';

@NgModule({
  declarations: [ContratTravailComponent, GestionUtilisateurComponent, AccueilAdminComponent],
  imports: [
    CommonModule,
    AdministrationRoutingModule
  ]
})
export class AdministrationModule { }
