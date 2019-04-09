import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [AccueilComponent, MenuComponent],
  imports: [
    CommonModule
  ]
})
export class IntranetModule { }
