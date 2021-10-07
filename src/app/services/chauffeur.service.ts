import { Injectable } from '@angular/core';
import{Chauffeur} from '../model/chauffeur';
@Injectable({
  providedIn: 'root'
})
export class ChauffeurService {
  chauffeur:Chauffeur[];

  constructor() { 
    this.chauffeur=[
      {idChauffeur:1,nomChauffeur:"Mohamed taher dayekh"},
      {idChauffeur:2,nomChauffeur:"faycel Jaberi"},
      {idChauffeur:3,nomChauffeur:"Ammar Gussemi"},
      {idChauffeur:4,nomChauffeur:"Mohamed Rahmouni"},
      {idChauffeur:5,nomChauffeur:"thebet Boughanmi"},
    ]
  }

  listerChauffeur():Chauffeur[]{
    return this.chauffeur;
  }

  ajoutChauffeur(chauf:Chauffeur){
    this.chauffeur.push(chauf);

  }


  supprimerchauffeur( chauf: Chauffeur){
    //supprimer le produit prod du tableau produits
    const index = this.chauffeur.indexOf(chauf, 0);
    if (index > -1) {
    this.chauffeur.splice(index, 1);
    }

}
}
