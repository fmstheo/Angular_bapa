import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntranetRoutingModule } from './intranet-routing.module';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { AproposComponent } from './apropos/apropos.component';
import { EspacecommunicationComponent } from './espacecommunication/espacecommunication.component';
import { PhpComponent } from './espacecommunication/php/php.component';
import { AlgoComponent } from './espacecommunication/algo/algo.component';
import { AnglaisComponent } from './espacecommunication/anglais/anglais.component';
import { AngularComponent } from './espacecommunication/angular/angular.component';
import { AppacheCordovaComponent } from './espacecommunication/appache-cordova/appache-cordova.component';
import { ApprendreAapprendreComponent } from './espacecommunication/apprendre-aapprendre/apprendre-aapprendre.component';
import { HtmlCssComponent } from './espacecommunication/html-css/html-css.component';
import { DroitsInformatiqueComponent } from './espacecommunication/droits-informatique/droits-informatique.component';
import { GestionDeProjetComponent } from './espacecommunication/gestion-de-projet/gestion-de-projet.component';

@NgModule({
  declarations: [AccueilComponent, MenuComponent, FooterComponent, AproposComponent, EspacecommunicationComponent, PhpComponent, AlgoComponent, AnglaisComponent, AngularComponent, AppacheCordovaComponent, ApprendreAapprendreComponent, HtmlCssComponent, DroitsInformatiqueComponent, GestionDeProjetComponent],
  imports: [
    CommonModule,
    IntranetRoutingModule
  ]
})
export class IntranetModule { }
