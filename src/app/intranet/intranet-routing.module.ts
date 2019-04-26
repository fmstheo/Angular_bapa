import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CovoiturageComponent } from './covoiturage/covoiturage.component';
import { GuideUtilisateurComponent } from './guide-utilisateur/guide-utilisateur.component';
import { ManagerComponent } from './manager/manager.component';
import { AdministrationComponent } from './administration/administration.component';
import { CommunicationComponent } from './communication/communication.component';
import { componentFactoryName } from '@angular/compiler';
import { AproposComponent } from './apropos/apropos.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [
  {path:'', component:AccueilComponent,
  children: [
        {path: '', component: MessageComponent},
        {path: 'conges', loadChildren:'./conges/conges.module#CongesModule'},
        {path: 'communication', component: CommunicationComponent},
        {path: 'manager', component: ManagerComponent},
        {path: 'adminisration', component: AdministrationComponent},
        {path: 'covoiturage', component: CovoiturageComponent},
        {path: 'guide-utlisateur', component: GuideUtilisateurComponent},
        {path: 'chatchatchat', loadChildren:'./chatchatchat/chatchatchat.module#ChatchatchatModule'}
      ] 
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
}
)
export class IntranetRoutingModule { }



