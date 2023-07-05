import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { throwError } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import { AuthService } from 'src/app/Services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-set-new-password',
  templateUrl: './set-new-password.component.html',
  styleUrls: ['./set-new-password.component.css'],
  providers:[MessageService]
})
export class SetNewPasswordComponent {
  
  updatePasswordForm: FormGroup = new Object() as FormGroup;
  isSubmitted: boolean = false;
  // isSuccess: boolean = false;
  passwordResetToken: string = '';
  passwordValidator="^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$";
  errorMessage:any='';
 

  constructor(private authServices: AuthService,private router:Router, private fb: FormBuilder, private messageService: MessageService,private route: ActivatedRoute,) {

  }
  get apiUrl(): string {
    return environment.apiUrl;
  }
  ngOnInit(): void {
    this.initializeForm();
    this.route.queryParams
      .subscribe(params => {
        this.passwordResetToken = params.resetToken;
      }
    );
  }
  initializeForm(): void {
    this.updatePasswordForm = this.fb.group({
      password: new FormControl("", [Validators.required, Validators.pattern(this.passwordValidator)]),
      confirmPassword: new FormControl("", [Validators.required]),
      passwordResetToken: new FormControl("")
    })
  }
  SetPassword() {
  
    this.isSubmitted = true
    if (this.updatePasswordForm.invalid || this.updatePasswordForm.get('newPassword')?.value != this.updatePasswordForm.get('confirmNewPassword')?.value) {
      return
    }
    this.updatePasswordForm.get('passwordResetToken')?.setValue(this.passwordResetToken);
    this.authServices.resetPassword(this.updatePasswordForm.value)
    .subscribe({
    next: (result) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Password has been reset Successfully.' });
        (async () => { 
          await new Promise<void>(resolve => setTimeout(()=>resolve(), 1000)).then(()=>this.router.navigate([`auth/login`],));
      })();
        // this.router.navigate([`auth/login`],);
    },
    error: (err) => {
      this.errorMessage = err.error.errorMessage;
          this.messageService.add({ severity: 'error', summary: 'Error', detail: this.errorMessage ?? "Internal server error." });
    }
  });
      
  }
}
