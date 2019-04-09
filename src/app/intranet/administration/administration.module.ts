import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { GestionutilisateurComponent } from './gestionutilisateur/gestionutilisateur.component';
import { BapaComponent } from './bapa/bapa.component';
import { ContratdetravailComponent } from './contratdetravail/contratdetravail.component';
import { SecuriteComponent } from './securite/securite.component';

@NgModule({
  declarations: [GestionutilisateurComponent, BapaComponent, ContratdetravailComponent, SecuriteComponent],
  imports: [
    CommonModule,
    AdministrationRoutingModule
  ]
})
export class AdministrationModule { }
