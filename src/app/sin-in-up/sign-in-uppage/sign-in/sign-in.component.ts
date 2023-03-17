import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit{
  
  namefile!: string;
  nameActor! : string;
  link! : string;

  constructor(private router : Router , private route : ActivatedRoute) {
    
    this.nameActor = this.route.snapshot.queryParams['actor'];
  
  }

  ngOnInit(): void{
    

  }

  redirection() {
  }
  
}

