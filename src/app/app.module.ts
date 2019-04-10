import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
=======
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 8309cb4b60d15c704f39da0f6ce53c1ed6dc099a

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { Erreur404Component } from './erreur404/erreur404.component';
import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';
<<<<<<< HEAD

=======
>>>>>>> 8309cb4b60d15c704f39da0f6ce53c1ed6dc099a

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
<<<<<<< HEAD
    Erreur404Component
=======
    Erreur404Component,
>>>>>>> 8309cb4b60d15c704f39da0f6ce53c1ed6dc099a
  ],
  imports: [
    BrowserModule,
    FormsModule,
<<<<<<< HEAD
    AppRoutingModule
=======
    AppRoutingModule,
    HttpClientModule
>>>>>>> 8309cb4b60d15c704f39da0f6ce53c1ed6dc099a
  ],
  providers: [AuthService, TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
