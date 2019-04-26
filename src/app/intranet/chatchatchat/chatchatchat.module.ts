import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatchatchatRoutingModule } from './chatchatchat-routing.module';
import { MignonComponent } from './mignon/mignon.component';
import { PageuneComponent } from './pageune/pageune.component';
import { PagedeuxComponent } from './pagedeux/pagedeux.component';
import { MenuchatComponent } from './menuchat/menuchat.component';
import { CongesComponent } from './conges/conges.component';

@NgModule({
  declarations: [MignonComponent, PageuneComponent, PagedeuxComponent, MenuchatComponent, CongesComponent],
  imports: [
    CommonModule,
    ChatchatchatRoutingModule
  ]
})
export class ChatchatchatModule { }
