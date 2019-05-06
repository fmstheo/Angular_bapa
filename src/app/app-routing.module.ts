import { AuthComponent } from './auth/auth.component';
import { GestionComponent } from './gestion/gestion.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'gestion', component: GestionComponent },
  { path: 'auth', component: AuthComponent},
  { path: '', component: AuthComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
