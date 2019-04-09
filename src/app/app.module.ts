import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { Erreur404Component } from './erreur404/erreur404.component';
import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';


@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    Erreur404Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthService, TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
