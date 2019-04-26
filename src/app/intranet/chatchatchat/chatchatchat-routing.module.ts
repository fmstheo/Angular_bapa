import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MignonComponent } from './mignon/mignon.component';
import { PageuneComponent } from './pageune/pageune.component';
import { PagedeuxComponent } from './pagedeux/pagedeux.component';

const routes: Routes = [
  {path: '', component: MignonComponent,
  children:[
    {path:'pageune', component: PageuneComponent},
    {path: 'pagedeux', component: PagedeuxComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatchatchatRoutingModule { }
