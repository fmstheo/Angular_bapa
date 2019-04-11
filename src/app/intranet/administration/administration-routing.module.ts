import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministrationComponent } from './administration/administration.component';
import { BapaComponent } from './bapa/bapa.component';
import { ContratdetravailComponent } from './contratdetravail/contratdetravail.component';
import { GestionutilisateurComponent } from './gestionutilisateur/gestionutilisateur.component';
import { SecuriteComponent } from './securite/securite.component';

const routes: Routes = [
  {path:"", component:AdministrationComponent,
  children: [
    
      {path:'bapa', component:BapaComponent},
      {path:'contrat-de-travail', component:ContratdetravailComponent},
      {path:'gestion-utilisateur', component:GestionutilisateurComponent},
      {path: 'securite', component:SecuriteComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
