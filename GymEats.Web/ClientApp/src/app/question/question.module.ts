import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ToolbarModule } from 'primeng/toolbar';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { GetQuestionsComponent } from './get-questions/get-questions.component';
@NgModule({
  declarations: [
    GetQuestionsComponent
  
  ],
  imports: [
    CommonModule,
    ToolbarModule,
    TableModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule ,
    ConfirmPopupModule,
    ToastModule,
    RouterModule.forChild([
    //  {path:'getQuestionList',component:GetQuestionListComponent},
     {path:'getQuestions',component:GetQuestionsComponent},
    ])
  ]
})
export class QuestionModule { }
