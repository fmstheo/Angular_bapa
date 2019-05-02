import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { Erreur404Component } from './erreur404/erreur404.component';
import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';
import { DevjuniorService } from './services/devjunior.service';
import { DevemployeService } from './services/devemploye.service';
import { CongesService } from './services/conges.service';
import { CongesdevjuniorService } from './services/congesdevjunior.service';
import { ManagerService } from './services/manager.service';
import { UseridentifiantsService } from './services/useridentifiants.service';



@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    Erreur404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService, TokenService, DevjuniorService, DevemployeService, CongesService, CongesdevjuniorService, ManagerService, UseridentifiantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 