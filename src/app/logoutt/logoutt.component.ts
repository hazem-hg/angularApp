import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthenticationService } from 'app/services/authentication.service'

@Component({
  selector: 'logoutt',
  templateUrl: './logoutt.component.html',
  styleUrls: ['./logoutt.component.css']
})
export class LogouttComponent implements OnInit {

  constructor(private router: Router,private ngZone: NgZone,private authenticationService : AuthenticationService) { }

  ngOnInit(): void {
    this.authenticationService.logout();
    this.router.navigate(['/dashboard'])
  .then(() => {
    window.location.reload();
  });

    }

}
