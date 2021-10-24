import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthenticationService } from 'app/services/authentication.service'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;

  constructor(public formBuilder: FormBuilder,private router: Router,private ngZone: NgZone,private authenticationService : AuthenticationService) { 
    this.loginForm = this.formBuilder.group({
      email : [''],
      password : [''],
    })
  }

  ngOnInit(): void {
  }
  onSubmit(): any {
    this.authenticationService.login(this.loginForm.value).subscribe((x)=>{
      console.log(x);
      if(x.success == true){
        localStorage.setItem('token',x.token);
        this.router.navigate(['/dashboard'])
  .then(() => {
    window.location.reload();
  });
      }else{
        alert("Check your informations");
      }
  });
}
}
