import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { error } from 'console';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/Services/auth.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
   providers:[MessageService]
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm: FormGroup = new Object() as FormGroup;
  isSubmitted: boolean = false;
  EmailValidator = "^[a-z0-9][a-z0-9-_\\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\\.[a-z0-9]{2,10}";
  errorMessage:any='';
 

  get apiUrl(): string {
    return environment.apiUrl;
  }
  constructor(
    private fb: FormBuilder,
    private authservice: AuthService,
    private messageService:MessageService
  ) {}
  
  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.resetPasswordForm = this.fb.group({
      email: new FormControl("", [Validators.required, Validators.pattern(this.EmailValidator)])
    })
  }
 
  SendRequest() {
    debugger;
  this.isSubmitted = true
  if (this.resetPasswordForm.invalid) {
    return
  }
  this.authservice.forgetPassword(this.resetPasswordForm.value).subscribe({
    next: (result) => {
      console.log(result)
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Password reset link is sent to your Email.' });

        this.resetPasswordForm.reset();
    },
    error: (err) => {
      this.errorMessage = err.error.errorMessage;
          this.messageService.add({ severity: 'error', summary: 'Error', detail: this.errorMessage ?? "Please check the email and try again." });
    }
  })
  }

}
