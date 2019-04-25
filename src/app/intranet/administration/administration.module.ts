import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { GestionutilisateurComponent } from './gestionutilisateur/gestionutilisateur.component';
import { BapaComponent } from './bapa/bapa.component';
import { ContratdetravailComponent } from './contratdetravail/contratdetravail.component';
import { SecuriteComponent } from './securite/securite.component';
import { AdministrationComponent } from './administration/administration.component';
import { UserStagiareComponent } from './user-stagiare/user-stagiare.component';
import { UserEmployeComponent } from './user-employe/user-employe.component';
import { UserEquipeComponent } from './user-equipe/user-equipe.component';

@NgModule({
  declarations: [GestionutilisateurComponent, BapaComponent, ContratdetravailComponent, SecuriteComponent, AdministrationComponent, UserStagiareComponent, UserEmployeComponent, UserEquipeComponent],
  imports: [
    CommonModule,
    AdministrationRoutingModule
  ]
})
export class AdministrationModule { }
