
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { MessageService } from 'primeng/api';
import { error } from 'console';
import { PrimeNGConfig } from 'primeng/api';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
  providers:[MessageService]
})
export class ChangePasswordComponent {
  errorMsg: any='';
  changePassword: FormGroup = new Object() as FormGroup;
  isSubmitted: boolean = false;
  IsFailed: boolean = false;
  iscurrentPasswordVisible:boolean=false;
  isnewPasswordVisible:boolean=false;
  isrepeatNewPasswordVisible:boolean=false;
  passwordValidator="^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$";
  EmailValidator = "^[a-zA-Z0-9-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$";
  errorMessage: any;
  isPasswordVisible1: boolean=false;
  isPasswordVisible2: boolean=false;
  isPasswordVisible3: boolean=false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private authservice: AuthService,
    private messageService: MessageService,
    private router: Router,
    private primengConfig: PrimeNGConfig
        ) 
  {}
  get apiUrl(): string {
    return environment.apiUrl;
  }
  ngOnInit(): void {
    this.initializeForm();
    this.primengConfig.ripple = true;
  }
  
  initializeForm(): void {
    this.changePassword = this.fb.group({
      currentPassword: new FormControl('', [Validators.required, Validators.pattern(this.passwordValidator)]),
      newPassword: new FormControl('', [Validators.required, Validators.pattern(this.passwordValidator),Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.pattern(this.passwordValidator)]),
      email: new FormControl('',[Validators.required,Validators.pattern(this.EmailValidator)])
    })
   
  }


  ChangePassword() {
    
    this.isSubmitted = true;
    this.IsFailed = false;
    if (this.changePassword.invalid || this.changePassword.get('newPassword')?.value != this.changePassword.get('confirmPassword')?.value) {
      return
    }
    this.authservice.changePassword(this.changePassword.value)
      .subscribe({
        next: (result) => {
          console.log('response: ',result);
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Password updated successfully' });
          (async () => { 
            await new Promise<void>(resolve => setTimeout(()=>resolve(), 1000)).then(()=>this.router.navigate([`auth/login`],));
        })();
        },
        error: (err) => {
          this.errorMessage = err.error.errorMessage;
          this.messageService.add({ severity: 'error', summary: 'Error', detail: this.errorMessage ?? "Internal server error please try again." });
        }
      });
  }

  onPasswordShow1(){
    this.isPasswordVisible1=true;
  }

  onPasswordHide1(){
    this.isPasswordVisible1=false;
  }

  onPasswordShow2(){
    this.isPasswordVisible2=true;
  }

  onPasswordHide2(){
    this.isPasswordVisible2=false;
  }

  onPasswordShow3(){
    this.isPasswordVisible3=true;
  }

  onPasswordHide3(){
    this.isPasswordVisible3=false;
  }
}

