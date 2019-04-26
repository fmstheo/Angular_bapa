import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { Erreur404Component } from './erreur404/erreur404.component';
import { ChatService } from './intranet/services/chat.service';
import { HttpClientModule } from '@angular/common/http';
import { StagiaireService } from './intranet/services/stagiaire.service';
import { StagiaireGretaService } from './intranet/services/stagiaire-greta.service';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    Erreur404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ 
    ChatService,
    StagiaireService,
    StagiaireGretaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
