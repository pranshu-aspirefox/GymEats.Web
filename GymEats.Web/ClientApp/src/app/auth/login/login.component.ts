
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { MessageService } from 'primeng/api';

import { error } from 'console';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
    providers:[MessageService]
})
export class LoginComponent implements OnInit {
  errorMsg: any='';
  passwordInput: any;
  errorMessage = "";
  isSubmitted: boolean = false;
  EmailValidator = "^[a-zA-Z0-9-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$";
  PasswordValidator="^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$";
  isfailed: boolean = false;
  isPasswordVisible: boolean = false;
  loginForm: FormGroup = new Object() as FormGroup;

  constructor(private authServices: AuthService, private fb: FormBuilder, private messageService: MessageService) {

  }

  ngOnInit(): void {
    this.initializeForm();

  }
   get f() { return this.loginForm.controls; }
  initializeForm(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.pattern(this.EmailValidator)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      rememberme: new FormControl(false)
    })
    console.log(this.loginForm.value);
  }

  LogIn() {
    debugger
    this.isfailed = false;
    this.isSubmitted = true
    if (this.loginForm.invalid) {
      return;

    }
    else {
      this.authServices.loginUser(this.loginForm.value).subscribe({
        next: (result) => {
          console.log(result);
          const token = result.token.access_token;
          localStorage.setItem("jwt", token);
          console.log(this.authServices.getRole());
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login Successfull' });
        },
        error: (err) => {
          this.errorMessage = err.error.errorMessage;
          this.messageService.add({ severity: 'error', summary: 'Error', detail: this.errorMessage ?? "Please check the email or password and try again." });
        }
      })
    }
  }

}
