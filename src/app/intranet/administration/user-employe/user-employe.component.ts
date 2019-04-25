import { Component, OnInit } from '@angular/core';
import { DevemployeService } from 'src/app/services/devemploye.service';

@Component({
  selector: 'app-user-employe',
  templateUrl: './user-employe.component.html',
  styleUrls: ['./user-employe.component.css']
})
export class UserEmployeComponent implements OnInit {

  constructor(public data:DevemployeService) { }

  ngOnInit() {
  }

}
