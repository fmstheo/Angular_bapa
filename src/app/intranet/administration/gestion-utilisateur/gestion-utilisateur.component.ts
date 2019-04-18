import { Component, OnInit } from '@angular/core';
import { PersonnelService } from '../../services/personnel.service';
// pour gérer les animations d'apparition/disparition des inputs de modifications
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Personnel } from '../../modeles/personnel';

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
      transition('close => open', animate('0.6s 0.8s ease-in')),
      transition('open => close', animate('0.2s  ease')),
    ])
  ]
})

export class GestionUtilisateurComponent implements OnInit {

  idModif: number;
  isOpen = false;
  personnels: Array<Personnel>;
  constructor(public personnel: PersonnelService) {

  }

  ngOnInit() {
    this.showPersonnel();
  }

  /**
   * foncion faisant appel au service PersonnelService: récupère les données
   */
  showPersonnel(): void {
    this.personnel.getPersonnel().subscribe(
      (data) => {
        console.log('data du service personnel coté service: ', data);
        this.personnels = data;
      });
  }

  /**
   * méthode gérant l'ouverture/fermeture des lignes d'input (selon id et flag isOpen)
   * @param id 
   */
  onModifier(id: number): void {
    this.idModif = this.isOpen ? this.idModif : -1;
    this.isOpen = this.idModif === id ? false : true ;
    this.idModif = id;
  }

  /**
   * pour sauvegarder les changements: NE MARCHE PAS! PB avec route http://localhost:4200/assets/data/...
   */
  onSave(): void {
    console.log('this.personnel.personnels : ', this.personnels);
    this.personnel.putPersonnel(this.personnels);
  }
}
