import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntranetRoutingModule } from './intranet-routing.module';
import { AccueilComponent } from './accueil/accueil.component';
import { AproposComponent } from './apropos/apropos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { MonEspaceComponent } from './mon-espace/mon-espace.component';
import { CovoiturageComponent } from './covoiturage/covoiturage.component';
import { GuideUtilisateurComponent } from './guide-utilisateur/guide-utilisateur.component';
import { CommunicationComponent } from './communication/communication.component';
import { ManagerComponent } from './manager/manager.component';
import { AdministrationComponent } from './administration/administration.component';
import { MessageComponent } from './message/message.component';
import { ChatService } from './services/chat.service';


@NgModule({
  declarations: [
    AccueilComponent,
    AproposComponent,
    MenuComponent,
    FooterComponent,
    MonEspaceComponent,
    CovoiturageComponent,
    GuideUtilisateurComponent,
    CommunicationComponent,
    ManagerComponent,
    AdministrationComponent,
    MessageComponent],
  imports: [
    CommonModule,
    IntranetRoutingModule
  ],
  providers:[ChatService]
})
export class IntranetModule { }
