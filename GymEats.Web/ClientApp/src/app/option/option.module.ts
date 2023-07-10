import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { RouterModule } from '@angular/router';
import { GetOptionListComponent } from './get-option-list/get-option-list.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


@NgModule({
  declarations: [
    GetOptionListComponent
  ],
  imports: [
    CommonModule,
    ToolbarModule,
    TableModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule ,
    ConfirmDialogModule,
    ConfirmPopupModule,
    ToastModule,
    RouterModule.forChild([
    {path:'getOptions',component:GetOptionListComponent}
    ])
  ]
})
export class OptionModule { }
