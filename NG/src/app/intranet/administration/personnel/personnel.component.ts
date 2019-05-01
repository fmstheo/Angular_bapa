import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Personnel } from '../../modeles/personnel';
// pour gérer les animations d'apparition/disparition des inputs de modifications
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css'],
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
export class PersonnelComponent implements OnInit {

  personnel: Personnel[];
  idModif: number;
  isOpen = false;

  selectedPerso: Personnel = {
    idPersonnel: null,
    telP: null,
    nomP: null,
    prenomP: null,
    postePrincipalP: null,
    loginP: null,
    mdpP: null,
    idService: null,
    email: null,
    matricule: null,
    idManager: null,
    actif: null
  }

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    // on récupère, via l'api, les données depuis la BDD
    this.apiService.readPersonnel().subscribe(
      (personnel : Personnel[])=>{
        this.personnel = personnel;
        console.log(this.personnel);
      }
    )
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

}
