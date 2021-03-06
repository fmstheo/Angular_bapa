import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { Erreur404Component } from './erreur404/erreur404.component';
import { AdminGuard } from './services/admin.guard';

const routes: Routes = [
  {path:'', component:ConnexionComponent},
  {path:'connexion', component:ConnexionComponent},
  {path:'intranet', loadChildren:'./intranet/intranet.module#IntranetModule', canLoad:[AdminGuard]},
  {path:'**', component:Erreur404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
