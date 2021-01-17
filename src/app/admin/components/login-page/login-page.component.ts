import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BookingService } from './../../services/booking.service';
import { ErrorHandlerClass } from 'src/app/shared/errorHandaler/ServerRoorHandler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginComponent implements OnInit {

  entryAsAdmin : FormGroup
  constructor(
    private fb: FormBuilder,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.entryAsAdmin = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,ErrorHandlerClass.passwordMatch('adminView')]],
    })
  }

  onSubmit(){
    localStorage.setItem('authentication', 'true');
    location.reload();
  }

}
