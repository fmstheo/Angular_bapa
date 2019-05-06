import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { GestionComponent } from './gestion/gestion.component';
import { GestionViewComponent } from './gestion-view/gestion-view.component';
import { GestionViewService } from './gestion-view/services/gestion-view.service';
import { SecuriseGuard } from './securise.guard';
import { ConnexionService } from './services/connexion.service';
import { ConnexionComponent } from './connexion/connexion.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    GestionComponent,
    GestionViewComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    GestionViewService,
    AuthService,
    SecuriseGuard,
    ConnexionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
