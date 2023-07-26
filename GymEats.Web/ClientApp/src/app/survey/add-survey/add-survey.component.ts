import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { last } from 'rxjs';
import { Diet } from 'src/app/@Core/Interface/common/Diet';
import { Option, Question } from 'src/app/@Core/Interface/common/Question';
import { QuestionService } from 'src/app/Services/question.service';
import { SurveyService } from 'src/app/Services/survey.service';
import { MessagePort } from 'worker_threads';

@Component({
  selector: 'app-add-survey',
  templateUrl: './add-survey.component.html',
  styleUrls: ['./add-survey.component.css'],
  providers:[MessageService]
})
export class AddSurveyComponent {
  questionList: Question[]=[];
  basicQuestion: Question = new Object as Question;
  surveyQuestion: Question = new Object as Question;
  diet:Diet= new Object as Diet;
  questionOption:Option=new Object as Option
  validToSubmit: boolean = true;
  
  loading!: boolean;
  var1: any;
  constructor(
    private service: SurveyService, private questionService: QuestionService,
     private router: Router,
     private messageService:MessageService,
       private route: ActivatedRoute,) 
  { }
  ngOnInit():void
{
  this.surveyQuestion.sequenceNumber=this.randomNumber();
    this.surveyQuestion.options = [];
    this.questionService.getQuestionDetails().subscribe({
      next: (result) => {
        this.questionList = result.data;
      },
      error: (err) => {
      }
    });
}
randomNumber(){
  return Math.random();
}
addServey()
{
var questionSelect = document.querySelector('[is-select="true"]');
if(questionSelect){
  this.messageService.add({severity:'error',summary:'Error',detail:'please select a question'});
  return ;
     }
var validateAnswerType=document.querySelector('[radio-is-valid="true"]')
if(validateAnswerType)
{
  this.messageService.add({severity:'error',summary:'Error',detail:'answer type is required'});
  return ;
}
  var isValidOption = document.querySelector('[is-invalid="true"]');
  if (isValidOption) {
    this.messageService.add({severity:'error',summary:'Error',detail:'option can not be empty'});
    return ;
  }
  var validateRadioButton=document.querySelector('[is-valid="true"]');
  if (validateRadioButton) {
    this.messageService.add({severity:'error',summary:'Error',detail:'please select option type'});
    return ;
  }
 if(this.surveyQuestion.answerType==null||this.surveyQuestion.answerType==undefined)
 {
  this.messageService.add({severity:'error',summary:'Error',detail:'answer type is required'});
 }
 var validateDiet=document.querySelector('[select-valid="true"]')
 if(validateDiet)
 {
  this.messageService.add({severity:'error',summary:'Error',detail:'please select a diet'});
    return ;
 }
 console.log(this.surveyQuestion);
 this.service.createNewSurvey(this.surveyQuestion).subscribe((responce:any)=>{
  this.messageService.add({severity:'success',summary:'Success',detail:'Survey added successfully'})
 })
  }
}
