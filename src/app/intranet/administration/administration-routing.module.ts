import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministrationComponent } from './administration/administration.component';
import { BapaComponent } from './bapa/bapa.component';
import { ContratdetravailComponent } from './contratdetravail/contratdetravail.component';
import { GestionutilisateurComponent } from './gestionutilisateur/gestionutilisateur.component';
import { SecuriteComponent } from './securite/securite.component';
import { UserStagiareComponent } from './user-stagiare/user-stagiare.component';
import { UserEmployeComponent } from './user-employe/user-employe.component';
import { UserEquipeComponent } from './user-equipe/user-equipe.component';

const routes: Routes = [
  {
    path: "", component: AdministrationComponent,
    children: [
      { path: 'bapa', component: BapaComponent },
      { path: 'contrat-de-travail', component: ContratdetravailComponent },
      {
        path: 'gestion-utilisateur', component: GestionutilisateurComponent,
        children: [
          { path: "", component: UserEmployeComponent },
          { path: "user-employe", component: UserEmployeComponent },
          { path: "user-stagiare", component: UserStagiareComponent },
          { path:"user-equipe", component: UserEquipeComponent}
        ]
      },
      { path: 'securite', component: SecuriteComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
