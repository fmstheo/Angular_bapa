import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntranetRoutingModule } from './intranet-routing.module';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { AproposComponent } from './apropos/apropos.component';
import { EspacecommunicationComponent } from './espacecommunication/espacecommunication.component';
import { PhpComponent } from './espacecommunication/php/php.component';

@NgModule({
  declarations: [AccueilComponent, MenuComponent, FooterComponent, AproposComponent, EspacecommunicationComponent, PhpComponent],
  imports: [
    CommonModule,
    IntranetRoutingModule
  ]
})
export class IntranetModule { }
