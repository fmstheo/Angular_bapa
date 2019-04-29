import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { GestionManagerComponent } from './gestion-manager/gestion-manager.component';
import { AccueilManagerComponent } from './accueil-manager/accueil-manager.component';
import { ListeManagerComponent } from './liste-manager/liste-manager.component';

@NgModule({
  declarations: [GestionManagerComponent, AccueilManagerComponent, ListeManagerComponent],
  imports: [
    CommonModule,
    ManagerRoutingModule
  ]
})
export class ManagerModule { }
