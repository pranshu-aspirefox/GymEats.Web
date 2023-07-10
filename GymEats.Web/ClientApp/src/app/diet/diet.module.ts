import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetDietListComponent } from './get-diet-list/get-diet-list.component';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    GetDietListComponent
  ],
  imports: [
    CommonModule,
    ConfirmDialogModule,
    ToolbarModule,
    TableModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule ,
    ConfirmPopupModule,
    ToastModule,
    RouterModule.forChild([
       {path:'getDietList',component:GetDietListComponent},
      ])
  ]
})
export class DietModule { }
