import { Component, OnInit } from '@angular/core';
import { StagiaireService } from '../services/stagiaire.service';

@Component({
  selector: 'app-guide-utilisateur',
  templateUrl: './guide-utilisateur.component.html',
  styleUrls: ['./guide-utilisateur.component.css']
})
export class GuideUtilisateurComponent implements OnInit {

  constructor(public data:StagiaireService) { }

  ngOnInit() {
  }

}
