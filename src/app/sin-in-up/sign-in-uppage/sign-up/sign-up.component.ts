import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit{
  
  namefile!: string;
  actor! : string;
  link! : string;

  constructor(private router : Router, private route : ActivatedRoute) {
    
    this.actor = this.route.snapshot.queryParams['actor'];
    
    if(this.router.url.includes('actors2/step2' || 'actors3/step2')){
    }
  
  }

  ngOnInit(): void{
  
  }


}
