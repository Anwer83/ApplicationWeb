import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChauffeurComponent } from './chauffeur/chauffeur.component';
import { ListeChauffeurComponent } from './liste-chauffeur/liste-chauffeur.component';

const routes: Routes = [
  {path:"ajoutChauffeur", component:ChauffeurComponent},
  {path:"listeChauffeur", component:ListeChauffeurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
