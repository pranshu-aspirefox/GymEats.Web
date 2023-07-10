import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetuserDetailsComponent } from './getuser-details/getuser-details.component';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GetuserDetailsComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    DialogModule,
    ToolbarModule,
    FormsModule,ReactiveFormsModule,
    RouterModule.forChild([     
      { path: 'get-all', component: GetuserDetailsComponent},
    ])
  ],
})
export class UserDetailsModule {}
