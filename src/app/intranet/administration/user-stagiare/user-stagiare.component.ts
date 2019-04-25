import { Component, OnInit } from '@angular/core';
import { DevjuniorService } from 'src/app/services/devjunior.service';

@Component({
  selector: 'app-user-stagiare',
  templateUrl: './user-stagiare.component.html',
  styleUrls: ['./user-stagiare.component.css']
})
export class UserStagiareComponent implements OnInit {

  constructor(public data:DevjuniorService) { }

  ngOnInit() {
  }

}