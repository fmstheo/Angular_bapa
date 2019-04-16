import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { Erreur404Component } from './erreur404/erreur404.component';
import { AuthorizedGuard } from './services/authorized.guard';

const routes: Routes = [
  { path: '', component: ConnexionComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'intranet', canLoad:[AuthorizedGuard], loadChildren: './intranet/intranet.module#IntranetModule'},
  { path: 'erreur404', component: Erreur404Component },
  { path: '**', redirectTo: 'erreur404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
