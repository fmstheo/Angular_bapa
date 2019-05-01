import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdministrationRoutingModule } from './administration-routing.module';
import { ContratTravailComponent } from './contrat-travail/contrat-travail.component';
import { GestionUtilisateurComponent } from './gestion-utilisateur/gestion-utilisateur.component';
import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component';
import { ContratTravailService } from './services/contrat-travail.service';
import { EmployeComponent } from './gestion-utilisateur/employe/employe.component';
import { PersonnelComponent } from './personnel/personnel.component';

@NgModule({
  declarations: [
    ContratTravailComponent, 
    GestionUtilisateurComponent, 
    AccueilAdminComponent, EmployeComponent, PersonnelComponent, 
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdministrationRoutingModule
  ],
  providers:[
    ContratTravailService
  ]
})
export class AdministrationModule { }
