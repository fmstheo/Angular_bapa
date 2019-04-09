import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { Erreur404Component } from './erreur404/erreur404.component';

const routes: Routes = [
<<<<<<< HEAD
  {path:'',component:ConnexionComponent},
  {path:'connexion',component:ConnexionComponent},
  {path:'intranet',loadChildren:'./intranet/intranet.module#IntranetModule'},
  {path:'**',component:Erreur404Component}
=======
  {path:'', component:ConnexionComponent},
  {path:'connexion', component:ConnexionComponent},
  {path:'**', component:Erreur404Component}
>>>>>>> 0c29ef0b59bcb0adc085beb876491753ccafd8dd
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
