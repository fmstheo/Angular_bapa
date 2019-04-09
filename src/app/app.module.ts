import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { Erreur404Component } from './erreur404/erreur404.component';
import { TokenService } from './services/token.service';
import { AuthService } from './services/auth.service';
import { FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    Erreur404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [TokenService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
