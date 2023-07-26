import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ToastModule } from 'primeng/toast';
import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [
   LoginComponent,
   ResetPasswordComponent,
   SetNewPasswordComponent,
   ChangePasswordComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      
      { path: 'reset', component: ResetPasswordComponent},
      {path:'login',component:LoginComponent},
      {path:'passwordChange',component:ChangePasswordComponent},
      {path:'setNewPassword',component:SetNewPasswordComponent}
    ])
  ]
})

export class AuthModule { 
}
