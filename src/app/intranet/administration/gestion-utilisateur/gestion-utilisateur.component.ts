import { Component, OnInit } from '@angular/core';
import { PersonnelService } from '../../services/personnel.service';

@Component({
  selector: 'app-gestion-utilisateur',
  templateUrl: './gestion-utilisateur.component.html',
  styleUrls: ['./gestion-utilisateur.component.css']
})
export class GestionUtilisateurComponent implements OnInit {

  constructor(public personnel:PersonnelService) {
    
  }

  ngOnInit() {
  }

}
