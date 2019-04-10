import { Component, OnInit, Input } from '@angular/core';
import { ManagerService } from '../services/manager.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  @Input()prenom:string;

  constructor(public managerService:ManagerService) { }

  ngOnInit() {
  }

}
