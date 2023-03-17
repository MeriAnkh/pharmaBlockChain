import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit{
  fonctionality! : string;

  constructor(private router : Router) {
    
  }

  ngOnInit(): void {
    this.fonctionality = 'Accueil';
    if(this.router.url.includes('Homme-patient')) {
      this.fonctionality = 'Accueil'
    }
    if(this.router.url.includes('commands-patient')){
      this.fonctionality = 'Faire une commande'
    }
    if(this.router.url.includes('medicines-patients')){
      this.fonctionality = 'Consulter les produits'
    }
    if(this.router.url.includes('health-suggestions')){
      this.fonctionality = 'Conseils de Santé'
    }
    if(this.router.url.includes('historique-patient')){
      this.fonctionality = 'Mon historique'
    }
    if(this.router.url.includes('social-health-media')){
      this.fonctionality = 'Voir un pharmacien'
    }

  }

  home(): void{
    this.fonctionality = 'Acceuil'
  }

  command(): void{
    this.fonctionality = 'Faire une commande'
  }

  suggestion(): void{
    this.fonctionality = 'Conseils de santé'
  }

  drugs(): void{
    this.fonctionality = 'Consulter les produits'
  }

  history(): void{
    this.fonctionality = 'Mon Historique'
  }

  chat(): void{
    this.fonctionality = 'Voir un pharmacien'
  }

}
