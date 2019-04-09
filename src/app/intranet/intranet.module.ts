import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { IntranetRoutingModule } from './intranet-routing.module';

@NgModule({
  declarations: [AccueilComponent, MenuComponent],
  imports: [
    CommonModule,
    IntranetRoutingModule
  ]
})
export class IntranetModule { }
