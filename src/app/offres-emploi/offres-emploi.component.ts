import { Component } from '@angular/core';
import { Emploi } from '../Model/emploi';

@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css']
})
export class OffresEmploiComponent {

  listeEmploi:Emploi[]=[
    {reference: "1",titre: "dsvh",entreprise: "kdsbk",etat: true},
    {reference: "3",titre: "dsvh",entreprise: "kdsbk",etat: true},
    {reference: "2",titre: "lkqn",entreprise: "dbskb",etat: false},
  ]
  nbr !: number;
  entrep !: string;
  postuler(){}
  Bilan() : number{
    this.nbr = 0;
    for (let index = 0; index < this.listeEmploi.length; index++) {
      if (this.listeEmploi[index].etat==true) {
        this.nbr++;
      }
      
    }
    return this.nbr;
  }

}
