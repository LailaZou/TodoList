import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  message="";

  constructor(private fb:FormBuilder,
    private router:Router,
     private auth:AuthentificationService) { }

  ngOnInit() {
    this.createForm();
  }

  onSubmit(){
    let userName=this.loginForm.value.login;
    let password=this.loginForm.value.password;
    this.auth.login(userName,password).subscribe(
      d=>{ this.router.navigate(['main']);},
      e=>{this.message="Erreur auth";});
    
   
  }
  createForm(){
    this.loginForm=this.fb.group({
      login:['',Validators.required],
      password:['',Validators.required],
    });
  }
}
