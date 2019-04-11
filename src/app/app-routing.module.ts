import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { Erreur404Component } from './erreur404/erreur404.component';

const routes: Routes = [
<<<<<<< HEAD
  { path: '', component: ConnexionComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'intranet', loadChildren: './intranet/intranet.module#IntranetModule' },
  // { path: 'administration', loadChildren: './intranet/administration/administration.module#AdministrationModule' },
  { path: '**', component: Erreur404Component }
=======
  {path:'', component:ConnexionComponent},
  {path:'connexion', component:ConnexionComponent},
  {path:'intranet', loadChildren:'./intranet/intranet.module#IntranetModule'},
  {path:'**', component:Erreur404Component}
>>>>>>> master
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
