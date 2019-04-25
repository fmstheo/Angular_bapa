import { Component, OnInit } from '@angular/core';
import { DevjuniorService } from 'src/app/services/devjunior.service';

@Component({
  selector: 'app-gestionutilisateur',
  templateUrl: './gestionutilisateur.component.html',
  styleUrls: ['./gestionutilisateur.component.css']
})
export class GestionutilisateurComponent implements OnInit {

  constructor(public data:DevjuniorService) { }

  ngOnInit() {
  }

}
