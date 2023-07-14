import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UnauthorizeComponent } from './unauthorize/unauthorize.component';



@NgModule({
  declarations: [
    UnauthorizeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'unauthorize', component:UnauthorizeComponent}
    ]),
  ]
})
export class ErrorModule { }
