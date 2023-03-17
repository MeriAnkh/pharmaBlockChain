import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';import { AuthentificationService } from 'src/app/core/services/auth.service';
import { signUpFormService } from 'src/app/core/services/signInUp.service';
import { confirmEqualValidator } from 'src/app/core/validators/confirm-equals.validators';

@Component({
  selector: 'app-sign-up-pharma-block-chain',
  templateUrl: './sign-up-pharma-block-chain.component.html',
  styleUrls: ['./sign-up-pharma-block-chain.component.scss']
})
export class SignUpPharmaBlockChainComponent implements OnInit{
  
  namefile!: string;
  nameActor! : string;
  urlRegex!: RegExp;
  emailRegex! : RegExp;
  phoneRegex! : RegExp;
  

  signUpPatientForm!: FormGroup;
  emailCtrl!: FormControl;
  phoneCtrl!: FormControl;
  userNameCtrl! : FormControl;
  passwordCtrl!: FormControl;
  confirmPasswordCtrl!: FormControl;
  loginInfoForm!: FormGroup;
  submitted!: boolean;
  constructor(private router : Router, private route : ActivatedRoute, 
    private formBuilder: FormBuilder, private authService : AuthentificationService,
    private signUpService: signUpFormService) {

    if(this.route.snapshot.queryParams['actor'] == 'patient'){
      this.nameActor = this.route.snapshot.queryParams['actor'];
    }

  }
  
  ngOnInit(): void{
    /* au cas ou on utilise la validation par une expression reguliere...
    this.emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/; */

    this.phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;

    this.initFormControls();
    
    
  
  }


  private initFormControls() {
    this.phoneCtrl = this.formBuilder.control('');
    this.emailCtrl = this.formBuilder.control('');

    this.emailCtrl.addValidators([ Validators.required,  Validators.email]);
    this.emailCtrl.updateValueAndValidity();
    this.phoneCtrl.addValidators([ Validators.required, Validators.pattern(this.phoneRegex)]);
    this.phoneCtrl.updateValueAndValidity();

    this.passwordCtrl = this.formBuilder.control(null, Validators.required);
    this.confirmPasswordCtrl = this.formBuilder.control(null, Validators.required);

 

    this.signUpPatientForm = this.formBuilder.group({

      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      birthDate: [null, Validators.required],
      nationality: [null, Validators.required],
      sexe: [null, Validators.required],  
      email: this.emailCtrl,
      telephone: this.phoneCtrl, 
      username: new FormControl(null, Validators.required),
      password: this.passwordCtrl,
      confirmPassword: this.confirmPasswordCtrl,
      chexcondition: new FormControl(false, Validators.requiredTrue)
    }, {
      validators: [confirmEqualValidator('password', 'confirmPassword')]
    });
  }
  

  // les validations

  urlimageprofile = "../assets/images/profile-preview.png";

  getImagePreview(e : any) {
    if(e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event : any) => { this.urlimageprofile = event.target.result; };
    }
    
  }

    
  // l'envoi du formulaire  
  onSubmitForm(formData: FormGroup) {    
    this.submitted = true

    if (formData.status == 'INVALID') {
      return;
    }

    let newForm = { ... this.signUpPatientForm.value }

    delete newForm.confirmPassword,
    delete newForm.chexcondition,

    newForm.imgProfileUrl = "imageProfile",
    newForm.alergies = ['']

    this.signUpService.saveUserInfo(newForm).subscribe({
      next: (data) => {
        let newmainform = {email: this.signUpPatientForm.value.email,  password : this.signUpPatientForm.value.password};
        this.authService.login(newmainform).subscribe({
          next: (dat) => {
            this.authService.initToken(dat.token);
            this.router.navigate([["../../onsignUp"], {queryParams : { actor : 'patient-dashbord'}}]);
          }
        })
      }
    })
  }

  // accède facilement aux controles du formulaire

  get f() { 
    return this.signUpPatientForm.controls;
   }

  onReset(formData: FormGroup) {
    this.submitted = false;
    formData.reset();
  }


}

