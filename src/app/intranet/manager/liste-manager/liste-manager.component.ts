import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-liste-manager',
  templateUrl: './liste-manager.component.html',
  styleUrls: ['./liste-manager.component.css']
})
export class ListeManagerComponent implements OnInit {

  constructor(public data:ManagerService) { }

  ngOnInit() {
  }

}
