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
import { GitComponent } from './espacecommunication/git/git.component';
import { JavaComponent } from './espacecommunication/java/java.component';
import { JavaScriptComponent } from './espacecommunication/java-script/java-script.component';
import { NodeJsComponent } from './espacecommunication/node-js/node-js.component';
import { PrestashopComponent } from './espacecommunication/prestashop/prestashop.component';
import { UmlComponent } from './espacecommunication/uml/uml.component';
import { IntranetComponent } from './intranet.component';
import { AccueilEspacecommunicationComponent } from './espacecommunication/accueil-espacecommunication/accueil-espacecommunication.component';

@NgModule({
  declarations: [AccueilComponent, MenuComponent, FooterComponent, AproposComponent, EspacecommunicationComponent, PhpComponent, AlgoComponent, AnglaisComponent, AngularComponent, AppacheCordovaComponent, ApprendreAapprendreComponent, HtmlCssComponent, DroitsInformatiqueComponent, GestionDeProjetComponent, GitComponent, JavaComponent, JavaScriptComponent, NodeJsComponent, PrestashopComponent, UmlComponent, IntranetComponent, AccueilEspacecommunicationComponent],
  imports: [
    CommonModule,
    IntranetRoutingModule
  ]
})
export class IntranetModule { }
