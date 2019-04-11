import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD

import { IntranetRoutingModule } from './intranet-routing.module';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CongesComponent } from './conges/conges.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FaqComponent } from './faq/faq.component';
=======
import { FormsModule } from '@angular/forms';

import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { IntranetRoutingModule } from './intranet-routing.module';
import { FooterComponent } from './footer/footer.component';
import { FaqComponent } from './faq/faq.component';
import { DashboardComponent } from './dashboard/dashboard.component';
>>>>>>> master
import { FaqService } from './services/faq.service';

@NgModule({
  declarations: [
<<<<<<< HEAD
    FooterComponent,
    NavComponent,
    AccueilComponent,
    CongesComponent,
    DashboardComponent,
    FaqComponent
  ],
  imports: [
    CommonModule,
=======
    AccueilComponent,
    MenuComponent,
    FooterComponent,
    FaqComponent,
    DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
>>>>>>> master
    IntranetRoutingModule
  ],
  providers: [FaqService]
})
export class IntranetModule { }
