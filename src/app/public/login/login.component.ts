import {Component, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './service/login.service';
import { Router } from '@angular/router';
import { AuthenticationRequest } from 'src/app/api/models/authentication-request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  errorMessage = '';
  isDisable = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  loginForm = this.fb.group({
    login: [null, Validators.required],
    password: [null, Validators.required],
  });

  ngOnInit(): void {
    document.body.className = 'hold-transition login-page';
  }

  setValue(): AuthenticationRequest {
    return {
      login: this.loginForm.value.login ?? undefined,
      password: this.loginForm.value.password ?? undefined,
    };
  }

  login(): void {
    this.isDisable = true;
    this.loginService.login(this.setValue()).subscribe({
      next: (response) => {
        this.router.navigate(['dashboard']);        
        this.isDisable = false;
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isDisable = false;
      },
    });
  }
}
