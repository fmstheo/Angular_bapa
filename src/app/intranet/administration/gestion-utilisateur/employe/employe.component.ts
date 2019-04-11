import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonnelService } from 'src/app/intranet/services/personnel.service';


@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  idEmploye: number;
  constructor(private maRoute: ActivatedRoute, public personnel: PersonnelService) { }

  ngOnInit() {
    this.maRoute.params.subscribe(
      idEmploye => {
        this.idEmploye = idEmploye['idEmploye'];
        console.log('idEmployé :',idEmploye['idEmploye']);
      });
  }

}
