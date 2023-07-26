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
  this.questionService.getQuestionDetails().subscribe({
    next: (questionList: Question[]) => {
      this.questionList = questionList;
    }
  })
}
  
}
