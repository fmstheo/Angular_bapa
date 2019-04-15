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
import { FaqDetailComponent } from './faq/faq-detail/faq-detail.component';
import { ManagerComponent } from './manager/manager.component';

@NgModule({
  declarations: [
    AccueilComponent,
    MenuComponent,
    FooterComponent,
    FaqComponent,
    DashboardComponent,
    FaqDetailComponent,
    ManagerComponent],
  imports: [
    CommonModule,
    FormsModule,
    IntranetRoutingModule
  ],
  providers: [FaqService]
})
export class IntranetModule { }
