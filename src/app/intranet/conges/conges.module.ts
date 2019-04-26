import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CongesRoutingModule } from './conges-routing.module';
import { MenuCongesComponent } from './menu-conges/menu-conges.component';
import { RecuperationComponent } from './recuperation/recuperation.component';
import { CongesExeptionnelsComponent } from './conges-exeptionnels/conges-exeptionnels.component';
import { ConsulterDemandeComponent } from './consulter-demande/consulter-demande.component';
import { AccueilCongesComponent } from './accueil-conges/accueil-conges.component';
import { DemandeCongesComponent } from './demande-conges/demande-conges.component';

@NgModule({
  declarations: [MenuCongesComponent, RecuperationComponent, CongesExeptionnelsComponent, ConsulterDemandeComponent, AccueilCongesComponent, DemandeCongesComponent],
  imports: [
    CommonModule,
    CongesRoutingModule
  ]
})
export class CongesModule { }
