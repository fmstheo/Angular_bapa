import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { IntranetRoutingModule } from './intranet-routing.module';
import { FooterComponent } from './footer/footer.component';
import { FaqComponent } from './faq/faq.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FaqService } from './services/faq.service';
import { AccueilCongesComponent } from './conges/accueil-conges/accueil-conges.component';
import { CongesExceptionnelsComponent } from './conges/conges-exceptionnels/conges-exceptionnels.component';
import { CongesService } from './services/conges.service';



@NgModule({
  declarations: [
    AccueilComponent,
    MenuComponent,
    FooterComponent,
    FaqComponent,
    DashboardComponent,
    AccueilCongesComponent,
    CongesExceptionnelsComponent],

  imports: [
    CommonModule,
    FormsModule,
    IntranetRoutingModule
  ],
  providers: [FaqService,
           CongesService,
           ]
})
export class IntranetModule { }
