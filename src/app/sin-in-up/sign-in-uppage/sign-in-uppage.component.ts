import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-uppage',
  templateUrl: './sign-in-uppage.component.html',
  styleUrls: ['./sign-in-uppage.component.scss']
})
export class SignInUppageComponent implements OnInit{ 
  

  constructor(private router: Router){

  }

  ngOnInit(): void{

  }
  
}
