import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyComponent } from './survey/survey.component';
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
@NgModule({
  declarations: [
    SurveyComponent,
    DietComponent,
   
    QuestionComponent,
    OptionComponent,
    AddSurveyComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    CheckboxModule,
    TriStateCheckboxModule,
    FormsModule,
    InputTextModule,
    
    ToolbarModule,
    DropdownModule ,
    ReactiveFormsModule,
    TreeSelectModule,
    ButtonModule,
    RadioButtonModule,
    RouterModule.forChild([
        {
          path:'addNewSurvey',
          component:AddSurveyComponent
        },
        {
          path:'question',
          component:QuestionComponent
        },
        {
          path:'option',
          component:OptionComponent
        },
        {
          path:'diet',
          component:DietComponent
        }
    ]),
  ],
  // entryComponents: [QuestionComponent, OptionComponent, DietComponent]
})
export class SurveyModule { }
