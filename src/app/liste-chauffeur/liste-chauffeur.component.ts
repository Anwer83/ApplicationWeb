import { Component, OnInit } from '@angular/core';
import{Chauffeur} from '../model/chauffeur';
import { ChauffeurService } from '../services/chauffeur.service';
@Component({
  selector: 'app-liste-chauffeur',
  templateUrl: './liste-chauffeur.component.html',
  styleUrls: ['./liste-chauffeur.component.css']
})
export class ListeChauffeurComponent implements OnInit {
  chauffeur:Chauffeur[];

  constructor(private chauffeurService:ChauffeurService) { 
    this.chauffeur=chauffeurService.listerChauffeur()
   
  }

  ngOnInit(): void {
  }

  supprimerChauffeur(chauff:Chauffeur){

    let conf = confirm("Etes-vous sûr ?");
         if (conf)
    this.chauffeurService.supprimerchauffeur(chauff)
  }

}
