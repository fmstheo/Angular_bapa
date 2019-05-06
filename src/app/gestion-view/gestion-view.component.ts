import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-gestion-view',
  templateUrl: './gestion-view.component.html',
  styleUrls: ['./gestion-view.component.scss']
})
export class GestionViewComponent implements OnInit {


  tableData = [

    {
      nom: 'Bellavia',
      prenom: 'Fabrice',
      datenaissance: '04/07/1968',
      email: 'fabrice.bellavia@fms-ea.com'

    },
    {
      nom: 'Beras',
      prenom: 'Gabriel',
      datenaissance: '14/09/1983',
      email: 'gabriel.beras@fms-ea.com'

    },
    {
      nom: 'Clave',
      prenom: 'Mathieu',
      datenaissance: '12/11/1990',
      email: 'clave.mathieu@fms-ea.com'

    },
    {
      nom: 'Guillaumin',
      prenom: 'Théodule',
      datenaissance: '06/11/1992',
      email: 'Théo.Guillaumin@fms-ea.com'

    },
    {
      nom: 'Goni',
      prenom: 'Didier',
      datenaissance: '04/08/1977',
      email: 'didier.goni@fms-ea.com'

    },
    {
      nom: 'Lassalle',
      prenom: 'Franck',
      datenaissance: '06/05/1988',
      email: 'franck.lassalle@fms-ea.com'

    },
    {
      nom: 'Lefevre',
      prenom: 'Emmanuel',
      datenaissance: '01/07/1982',
      email: 'emmanuel.lefevre@fms-ea.com'

    },
    {
      nom: 'Parrot',
      prenom: 'Bertrand',
      datenaissance: '19/02/1988',
      email: 'bertrand.parrot@fms-ea.com'

    },
    {
      nom: 'Petrement',
      prenom: 'Gregory',
      datenaissance: '27/09/1993',
      email: 'gregory.petrement@fms-ea.com'

    },
    {
      nom: 'Sandra',
      prenom: 'Quere',
      datenaissance: '24/10/1978',
      email: 'sandra.quere@fms-ea.com'

    }
  ];

  result="";


  constructor() { }

  ngOnInit() {
  }

  recupeData(nom: string, prenom: string, datedenaissance: Date, email: EmailValidator  ){
this.result = nom, prenom, datedenaissance, email;
  }

}
