import { ConnexionService } from './../services/connexion.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Component} from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {

donnesID = {login:", mdp:"};

  constructor(public connexionService:ConnexionService) { }
}
