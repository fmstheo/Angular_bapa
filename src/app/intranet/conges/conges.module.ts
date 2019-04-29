import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CongesRoutingModule } from './conges-routing.module';
import { RecuperationComponent } from './recuperation/recuperation.component';
import { CongesExeptionnelsComponent } from './conges-exeptionnels/conges-exeptionnels.component';
import { ConsulterDemandeComponent } from './consulter-demande/consulter-demande.component';
import { DemandeDeCongesComponent } from './demande-de-conges/demande-de-conges.component';
import { CongesComponent } from './conges/conges.component';
import { CertifValidationComponent } from './certif-validation/certif-validation.component';

@NgModule({
  declarations: [RecuperationComponent, CongesExeptionnelsComponent, ConsulterDemandeComponent, DemandeDeCongesComponent, CongesComponent, CertifValidationComponent],
  imports: [
    CommonModule,
    CongesRoutingModule
  ]
})
export class CongesModule { }
