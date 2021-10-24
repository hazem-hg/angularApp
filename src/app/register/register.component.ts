import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthenticationService } from 'app/services/authentication.service'
@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;

  constructor(public formBuilder: FormBuilder,private router: Router,private ngZone: NgZone,private authenticationService : AuthenticationService) {
    this.registerForm = this.formBuilder.group({
      email : [''],
      password : [''],
      username : [''],
    })
   }

  ngOnInit(): void {
  }
  onSubmit(): any {
    this.authenticationService.register(this.registerForm.value).subscribe((x)=>{
      this.ngZone.run(() => this.router.navigateByUrl('/login'))
      }, (err) => {
        alert("Check your informations");
    });
  }

}
