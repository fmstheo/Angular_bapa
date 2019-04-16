import { Component, OnInit } from '@angular/core';
import { PersonnelService } from '../../services/personnel.service';
// pour gérer les animations d'apparition/disparition des inputs de modifications
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-gestion-utilisateur',
  templateUrl: './gestion-utilisateur.component.html',
  styleUrls: ['./gestion-utilisateur.component.css'],
  animations: [
    trigger('animInput', [
      state('close', style({
        opacity: 0,
        display: 'none'
      })),
      state('open', style({
        opacity: 1,
        display: ''
      })),
      transition('close <=> open', animate(300)),
    ])
  ]
})
export class GestionUtilisateurComponent implements OnInit {
  idModif = 58;
  modifiable = false;

  constructor(public personnel:PersonnelService) {
    
  }

  ngOnInit() {
  }
/* onModifier(id){
  this.idModif = id;
} */
onModifier(){
  this.modifiable = !this.modifiable;
}
}
