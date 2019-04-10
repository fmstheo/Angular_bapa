import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { IntranetRoutingModule} from './intranet-routing.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AccueilComponent, MenuComponent, FooterComponent],
  imports: [
    CommonModule,
    IntranetRoutingModule

  ]
})
export class IntranetModule { }
