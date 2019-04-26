import { Component, OnInit } from '@angular/core';
import { StagiaireGretaService } from '../services/stagiaire-greta.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(public data:StagiaireGretaService) { }

  ngOnInit() {
  }

}
