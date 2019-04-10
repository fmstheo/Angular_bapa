import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntranetRoutingModule } from './intranet-routing.module';
<<<<<<< HEAD
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { AproposComponent } from './apropos/apropos.component';

@NgModule({
  declarations: [AccueilComponent, MenuComponent, FooterComponent, AproposComponent],
  imports: [
    CommonModule,
    IntranetRoutingModule
  ]
=======
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
>>>>>>> 8309cb4b60d15c704f39da0f6ce53c1ed6dc099a
})
export class IntranetModule { }
