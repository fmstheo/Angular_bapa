import { Component, OnInit } from '@angular/core';
import { PersonnelService } from '../../services/personnel.service';

@Component({
  selector: 'app-gestion-utilisateur',
  templateUrl: './gestion-utilisateur.component.html',
  styleUrls: ['./gestion-utilisateur.component.css']
})
export class GestionUtilisateurComponent implements OnInit {
  idModif = 58;

  constructor(public personnel:PersonnelService) {
    
  }

  ngOnInit() {
  }
onModifier(id){
  this.idModif = id;
}
}
