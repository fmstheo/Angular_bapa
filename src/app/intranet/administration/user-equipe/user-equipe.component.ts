import { Component, OnInit } from '@angular/core';
import { DevemployeService } from 'src/app/services/devemploye.service';
import { DevjuniorService } from 'src/app/services/devjunior.service';

@Component({
  selector: 'app-user-equipe',
  templateUrl: './user-equipe.component.html',
  styleUrls: ['./user-equipe.component.css']
})
export class UserEquipeComponent implements OnInit {

  constructor(public dataemploye:DevemployeService, public datajunior:DevjuniorService) { }

  ngOnInit() {
  }

}
