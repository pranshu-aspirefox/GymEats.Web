import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DietComponent } from './survey-component/diet/diet.component';
import { QuestionComponent } from './survey-component/question/question.component';
import { OptionComponent } from './survey-component/option/option.component';
import { RouterModule } from '@angular/router';
import { AddSurveyComponent } from './add-survey/add-survey.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TreeSelectModule } from 'primeng/treeselect';
import { AccordionModule } from 'primeng/accordion';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { CheckboxModule } from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';
import { SurveyEditComponent } from './survey-edit/survey-edit.component';
import { DialogModule } from 'primeng/dialog';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    DietComponent,  
    QuestionComponent,
    OptionComponent,
    AddSurveyComponent,
    SurveyEditComponent,
  
  ],
  imports: [
    CommonModule,
    CardModule,
    CheckboxModule,
    AccordionModule,
    RadioButtonModule,
    TriStateCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ToolbarModule,
    DropdownModule ,
    ToastModule,
    ReactiveFormsModule,
    TreeSelectModule,
    ButtonModule,
    DialogModule,
    RadioButtonModule,
    RouterModule.forChild([
        {path:'', redirectTo:'editSurvey',pathMatch:'full'},
        {
          path:'addNewSurvey',
          component:AddSurveyComponent
         },
        {
          path:'editSurvey',
          component:SurveyEditComponent
         },
         {
          path:'question',
          component:QuestionComponent
        },
        {
          path:'option',
          component:OptionComponent
        },
        {   path:'diet',
          component:DietComponent
        }
    ]),
  ],
  // entryComponents: [QuestionComponent, OptionComponent, DietComponent]
})
export class SurveyModule { }
