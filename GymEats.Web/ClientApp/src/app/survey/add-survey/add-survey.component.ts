import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/@Core/Interface/common/Question';
import { QuestionService } from 'src/app/Services/question.service';
import { SurveyService } from 'src/app/Services/survey.service';

@Component({
  selector: 'app-add-survey',
  templateUrl: './add-survey.component.html',
  styleUrls: ['./add-survey.component.css']
})
export class AddSurveyComponent {
  questionList: Question[] | undefined;
  basicQuestion: Question = new Object as Question;
  surveyQuestion: Question = new Object as Question;
  
  validToSubmit: boolean = true;
  @ViewChild('questionComponent', { read: ViewContainerRef }) entry!: ViewContainerRef;
  loading!: boolean;
  constructor(private vf: ViewContainerRef, private resolver: ComponentFactoryResolver,
    private service: SurveyService, private questionService: QuestionService,
     private router: Router,
       private route: ActivatedRoute,) 
  { }
ngoninit()
{
  this.questionService.getQuestionDetails().subscribe({
    next: (questionList: Question[]) => {
      this.questionList = questionList;
    }
  })
}
  
}
