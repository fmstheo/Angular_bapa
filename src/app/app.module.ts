import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { Erreur404Component } from './erreur404/erreur404.component';
import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';
import { AuthIntercepteur } from './services/auth.intercepteur';
import { SecuriteIntercepteur } from './services/securite.intercepteur';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    Erreur404Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService, TokenService, { provide: HTTP_INTERCEPTORS, useClass: AuthIntercepteur, multi: true }, { provide: HTTP_INTERCEPTORS, useClass: SecuriteIntercepteur, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
