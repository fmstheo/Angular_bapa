import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { IntranetRoutingModule } from './intranet-routing.module';
import { FooterComponent } from './footer/footer.component';
import { FaqComponent } from './faq/faq.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FaqService } from './services/faq.service';
import { ManagerComponent } from './manager/manager.component';
import { ManagerService } from './services/manager.service';


@NgModule({
  declarations: [
    AccueilComponent,
    MenuComponent,
    FooterComponent,
    FaqComponent,
    DashboardComponent,
    ManagerComponent],
  imports: [
    CommonModule,
    IntranetRoutingModule
  ],
  providers: [
    FaqService,
    ManagerService
  ],
})
export class IntranetModule { }
