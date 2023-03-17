import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sign-in-pharmablockchain',
  templateUrl: './sign-in-pharmablockchain.component.html',
  styleUrls: ['./sign-in-pharmablockchain.component.scss']
})
export class SignInPharmablockchainComponent implements OnInit{
  loginForm! : FormGroup
  crudentialError! : boolean

  constructor(private formbuilder : FormBuilder, private router : Router, private authentificationservice : AuthentificationService) {}

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email : [null, Validators.required, Validators.email],
      password : [null, Validators.required]
    })
  }

  onLogin() : void{
    this.authentificationservice.login(this.loginForm.value).subscribe({
      next: (data) => {
        this.authentificationservice.initToken(data.token);
        this.router.navigate([["../../onsignUp"], {queryParams : { actor : 'patient-dashbord'}}]);
      },
      error: () => this.crudentialError= true,
    })
  }

}
