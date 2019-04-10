import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
<<<<<<< HEAD
import { GestionutilisateurComponent } from './gestionutilisateur/gestionutilisateur.component';
import { BapaComponent } from './bapa/bapa.component';
import { ContratdetravailComponent } from './contratdetravail/contratdetravail.component';
import { SecuriteComponent } from './securite/securite.component';

@NgModule({
  declarations: [GestionutilisateurComponent, BapaComponent, ContratdetravailComponent, SecuriteComponent],
=======
import { ContratTravailComponent } from './contrat-travail/contrat-travail.component';

@NgModule({
  declarations: [ContratTravailComponent],
>>>>>>> 8309cb4b60d15c704f39da0f6ce53c1ed6dc099a
  imports: [
    CommonModule,
    AdministrationRoutingModule
  ]
})
export class AdministrationModule { }
