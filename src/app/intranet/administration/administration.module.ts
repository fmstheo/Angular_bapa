import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { ContratTravailComponent } from './contrat-travail/contrat-travail.component';
import { GestionUtilisateurComponent } from './gestion-utilisateur/gestion-utilisateur.component';
import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component';
import { ContratTravailService } from './services/contrat-travail.service';

@NgModule({
  declarations: [
    ContratTravailComponent, 
    GestionUtilisateurComponent, 
    AccueilAdminComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule
  ],
  providers:[
    ContratTravailService
  ]
})
export class AdministrationModule { }
