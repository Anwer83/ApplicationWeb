import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChauffeurComponent } from './chauffeur/chauffeur.component';
import { ListeChauffeurComponent } from './liste-chauffeur/liste-chauffeur.component';

@NgModule({
  declarations: [
    AppComponent,
    ChauffeurComponent,
    ListeChauffeurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
