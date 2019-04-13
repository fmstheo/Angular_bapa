import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { IntranetRoutingModule } from './intranet-routing.module';
import { FooterComponent } from './footer/footer.component';

import { FaqService } from './services/faq.service';
import { AccueilCongesComponent } from './conges/accueil-conges/accueil-conges.component';
import { ConsultCongesComponent } from './conges/consult-conges/consult-conges.component';

@NgModule({
  declarations: [
    AccueilComponent,
    MenuComponent,
    FooterComponent,
   
    AccueilCongesComponent,
    ConsultCongesComponent
  ],
  imports: [
    CommonModule,
    IntranetRoutingModule
  ],
  providers: [FaqService]
})
export class IntranetModule { }
