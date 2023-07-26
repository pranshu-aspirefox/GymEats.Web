import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Question } from 'src/app/@Core/Interface/common/Question';
import { QuestionService } from 'src/app/Services/question.service';
import { SurveyService } from 'src/app/Services/survey.service';

@Component({
  selector: 'app-survey-edit',
  templateUrl: './survey-edit.component.html',
  styleUrls: ['./survey-edit.component.css'],
  providers: [MessageService]
})
export class SurveyEditComponent {
  primaryQuestion: any;
  surveyid: any;
  disabled:boolean=true;
  constructor(private questionService: QuestionService,private route:ActivatedRoute,private router:Router,private surveyService: SurveyService, private serveyService: SurveyService, private messageService: MessageService) {
  }
  questionList: Question[] = [];
  surveyQuestion: Question = new Object as Question;
  SueveyToEdit: Question = new Object as Question;
  showSurveyControl: boolean = true;
  showEdit: boolean = true;
  visible:boolean=false
  errorMessage:any;
  loading: boolean = false;
  isDisable: boolean = false;
  ngOnInit() {
    this.disabled=true;
    this.questionService.getQuestionDetails().subscribe((result) => {
      this.questionList = result.data;
    })
    this.serveyService.getServey().subscribe((result) => {
      if(result.data.id!=null){
        this.showEdit=false;
      }
      else{
        this.showEdit=true;
      }
      this.SueveyToEdit = result.data;
      this.SueveyToEdit.sequenceNumber = this.randomNumber();
      if (this.questionList)
        this.questionList.forEach(que => {
          if (que.id == this.SueveyToEdit.id) {
            this.primaryQuestion = que.label;
          }
        })
      this.surveyid = result.data.id;
      console.log(this.SueveyToEdit);
    })
  }
  randomNumber(): Number {
    return Math.random();
  }
  editSurvey() {
    this.disabled = false; 
  }

   Cancel()
   {
    this.disabled=true; 
   }
 
  addServey() {
    
    var questionSelect = document.querySelector('[is-select="true"]');
    if (questionSelect) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'please select a question' });
      return;
    }
    var validateAnswerType = document.querySelector('[radio-is-valid="true"]')
    if (validateAnswerType) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'answer type is required' });
      return;
    }
    var isValidOption = document.querySelector('[is-invalid="true"]');
    if (isValidOption) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'option can not be empty' });
      return;
    }
    var validateRadioButton = document.querySelector('[is-valid="true"]');
    if (validateRadioButton) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'please select option type' });
      return;
    }

    if (this.SueveyToEdit.answerType == null || this.SueveyToEdit.answerType == undefined) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'answer type is required' });
    }
    var validateDiet = document.querySelector('[select-valid="true"]')
    if (validateDiet) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'please select a diet' });
      return;
    }
    this.loading = true;
    this.surveyService.updateServey(this.SueveyToEdit).subscribe({
      next:(result)=>{
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'survey updated successfully' });
      window.location.reload();
      this.disabled=true;
    },
    error:(err)=>{
      this.errorMessage = err.error.errorMessage;
      this.messageService.add({ severity: 'success', summary: 'Success',  detail: this.errorMessage ?? "internal server error" });
    }
  });
  }
  Reset()
  {
    this.visible=true;
  }
  resetSurvey()
  {
    
    this.visible=false;
    this.surveyService.resetSurvey().subscribe({
      next:(result)=>{
        debugger;
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'survey reset successfully' });
     setTimeout(() => {
      this.router.navigate(['../addNewSurvey'], { relativeTo: this.route });
     },1000);
     
  
    },
    error:(err)=>{
      this.errorMessage = err.error.errorMessage;
      this.messageService.add({ severity: 'success', summary: 'Success',  detail: this.errorMessage ?? "internal server erroe." });
    }
  });
  }
  cancel()
  {
    this.visible=false;
  }
  Add(){
    
    this.router.navigate(['../addNewSurvey'], { relativeTo: this.route });
  }
}
