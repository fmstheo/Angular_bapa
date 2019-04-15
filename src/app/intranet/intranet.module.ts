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
<<<<<<< HEAD
import { FaqDetailComponent } from './faq/faq-detail/faq-detail.component';
<<<<<<< HEAD
=======
import { ManagerComponent } from './manager/manager.component';
>>>>>>> 34d97abfd1a0a58a1a968978ab430c67722f43d8
=======
import { ManagerComponent } from './manager/manager.component';
>>>>>>> c3d9bc099fa926ab8b0185bae805ef1f949ee0d5

@NgModule({
  declarations: [
    AccueilComponent,
    MenuComponent,
    FooterComponent,
    FaqComponent,
    DashboardComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    FaqDetailComponent],
=======
    ManagerComponent],
>>>>>>> 34d97abfd1a0a58a1a968978ab430c67722f43d8
=======
    FaqDetailComponent,
    ManagerComponent],
>>>>>>> c3d9bc099fa926ab8b0185bae805ef1f949ee0d5
  imports: [
    CommonModule,
    FormsModule,
    IntranetRoutingModule
  ],
  providers: [FaqService]
})
export class IntranetModule { }
