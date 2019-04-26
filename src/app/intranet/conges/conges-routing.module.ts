import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecuperationComponent } from './recuperation/recuperation.component';
import { CongesExeptionnelsComponent } from './conges-exeptionnels/conges-exeptionnels.component';
import { ConsulterDemandeComponent } from './consulter-demande/consulter-demande.component';
import { AccueilCongesComponent } from './accueil-conges/accueil-conges.component';
import { DemandeCongesComponent } from './demande-conges/demande-conges.component';

const routes: Routes = [
  {path:'', component: AccueilCongesComponent,
    children:[
      {path: '', component: DemandeCongesComponent},
      {path:'recuperation', component: RecuperationComponent},
      {path:'conge-exceptionnels', component: CongesExeptionnelsComponent},
      {path:'consulter-demande', component: ConsulterDemandeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CongesRoutingModule { }
