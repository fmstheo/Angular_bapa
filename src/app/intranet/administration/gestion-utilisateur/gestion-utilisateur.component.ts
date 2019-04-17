import { Component, OnInit } from '@angular/core';
import { PersonnelService } from '../../services/personnel.service';
// pour gérer les animations d'apparition/disparition des inputs de modifications
import { animate, state, style, transition, trigger } from '@angular/animations';

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
      transition('close => open', animate('0.6s 0.4s ease-in')),
      transition('open => close', animate('0.2s  ease')),
    ])
  ]
})
export class GestionUtilisateurComponent implements OnInit {
  idModif:number;
  isOpen = false;

  constructor(public personnel: PersonnelService) {

  }

  ngOnInit() {
  }
  /* onModifier(id){
    this.idModif = id;
  } */
  onModifier(id) {
    this.idModif = id;
    // if(id == this.idModif) this.isOpen = true; 
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }
  onFermer(){
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }
  onPlop(){alert('plop')}
}
