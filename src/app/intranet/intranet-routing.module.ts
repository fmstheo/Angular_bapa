import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AproposComponent } from './apropos/apropos.component';
// import { AdministrationModule } from './administration/administration.module';
// import { AdministrationComponent } from './administration/administration/administration.component';
import { EspacecommunicationComponent } from './espacecommunication/espacecommunication.component';
import { PhpComponent } from './espacecommunication/php/php.component';
import { AlgoComponent } from './espacecommunication/algo/algo.component';
import { AnglaisComponent } from './espacecommunication/anglais/anglais.component';
import { AngularComponent } from './espacecommunication/angular/angular.component';
import { AppacheCordovaComponent } from './espacecommunication/appache-cordova/appache-cordova.component';
import { ApprendreAapprendreComponent } from './espacecommunication/apprendre-aapprendre/apprendre-aapprendre.component';
import { HtmlCssComponent } from './espacecommunication/html-css/html-css.component';
import { DroitsInformatiqueComponent } from './espacecommunication/droits-informatique/droits-informatique.component';
// import { compileBaseDefFromMetadata } from '@angular/compiler';
import { GestionDeProjetComponent } from './espacecommunication/gestion-de-projet/gestion-de-projet.component';
import { GitComponent } from './espacecommunication/git/git.component';
import { JavaComponent } from './espacecommunication/java/java.component';
import { JavaScriptComponent } from './espacecommunication/java-script/java-script.component';
import { NodeJsComponent } from './espacecommunication/node-js/node-js.component';
import { PrestashopComponent } from './espacecommunication/prestashop/prestashop.component';
import { UmlComponent } from './espacecommunication/uml/uml.component';


const routes: Routes = [

  { path: 'a-propos', component: AproposComponent },
  // { path: "espace-communication", component: EspacecommunicationComponent  },
  {
    path: '', component: AccueilComponent,
    
    children: [
      { path: 'a-propos', component: AproposComponent },
      { path: 'administration', loadChildren: './administration/administration.module#AdministrationModule' },
      { path: 'conges', loadChildren: './conges/conges.module#CongesModule'},
      {
        path: "espace-communication", component: EspacecommunicationComponent,
        children: [
          { path: "php", component: PhpComponent },
          { path: "algo", component: AlgoComponent },
          { path: "anglais", component: AnglaisComponent },
          { path: "angular", component: AngularComponent },
          { path: "appache-cordova", component: AppacheCordovaComponent },
          { path: "apprendre-a-apprendre", component: ApprendreAapprendreComponent},
          { path: "html-css", component: HtmlCssComponent },
          { path: "droits-informatique", component: DroitsInformatiqueComponent },
          { path: "gestion-de-projet", component: GestionDeProjetComponent },
          { path: "git", component: GitComponent },
          { path: "java", component: JavaComponent},
          { path: "javascript", component: JavaScriptComponent},
          { path: "node-js", component: NodeJsComponent},
          { path: "prestashop", component: PrestashopComponent},
          { path: "uml", component: UmlComponent}
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { }
