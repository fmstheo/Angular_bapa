import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntranetRoutingModule } from './intranet-routing.module';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CongesComponent } from './conges/conges.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FaqComponent } from './faq/faq.component';
import { FaqService } from './services/faq.service';

@NgModule({
  declarations: [
    FooterComponent,
    NavComponent,
    AccueilComponent,
    CongesComponent,
    DashboardComponent,
    FaqComponent
  ],
  imports: [
    CommonModule,
    IntranetRoutingModule
  ],
  providers: [FaqService]
})
export class IntranetModule { }
