import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { Erreur404Component } from './erreur404/erreur404.component';
import { AuthorizedGuard } from './services/authorized.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { ReinitMdpComponent } from './reinit-mdp/reinit-mdp.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', component: ConnexionComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'signeUp', component: CreateUserComponent },
  { path: 'forgottenPwd', component: ReinitMdpComponent },
  { path: 'intranet', canLoad:[AuthGuard], loadChildren: './intranet/intranet.module#IntranetModule'},
  { path: 'erreur404', component: Erreur404Component },
  { path: '**', redirectTo: 'erreur404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
