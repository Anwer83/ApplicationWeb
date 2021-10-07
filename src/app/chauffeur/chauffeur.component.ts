import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import{Chauffeur} from '../model/chauffeur';
import { ChauffeurService } from '../services/chauffeur.service';

@Component({
  selector: 'app-chauffeur',
  templateUrl: './chauffeur.component.html',
  styleUrls: ['./chauffeur.component.css']
})
export class ChauffeurComponent implements OnInit {

 chauffeur=new Chauffeur();
 message:string;

  constructor(private chauffeurService:ChauffeurService) {}  


  ngOnInit(): void {
  }

  ajouterchauffeur(){
      this.message="le chauffeur " +this.chauffeur.nomChauffeur+" à été ajouter avec succées!"

    this.chauffeurService.ajoutChauffeur(this.chauffeur);
    console.log(this.chauffeur);

  }

}
