import { Component, EventEmitter, Input, OnInit, Output, QueryList } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { log } from 'console';
import { Router } from '@angular/router';
import { Question } from 'src/app/@Core/Interface/common/Question';
import { Option } from 'src/app/@Core/Interface/common/Question';
import { QuestionService } from 'src/app/Services/question.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  providers: [MessageService]
})
export class QuestionComponent {
  
  @Input() questionList:Question[]=[];
  @Input() disabled!:boolean;
  addOption: boolean = false;
  showRadioBtn: boolean = false;
  @Input() surveyQuestion: Question =  new Object as Question ;
  @Output() notValidEvent = new EventEmitter<boolean>();
  optionNo = 1;
  answerType:any;
  control!: FormControl<any>;
 
  constructor(private questionService: QuestionService) {
  }
  
  ngOnInit():void {
    
    if(this.surveyQuestion.options)
    if(this.surveyQuestion.options.length>0){
      this.surveyQuestion.options.forEach(opt=>opt.sequenceNumber=this.randomNumber());
    }
     //this.control = new FormControl(this.questionList[1].label);
  }

  onChangeRadioBtn(event:any)
  {
    this.optionNo = 1;
    this.surveyQuestion.options = [];
    this.addOption = true;
    for (var i = 0; i < 2; i++) {
      var option = new Object as Option;
      option.sequenceNumber=this.randomNumber();
      option.isOpen = true;
      this.surveyQuestion.options.push(option);
    }
  }
  randomNumber(){
    return Math.random();
  }
  
 addOptionComponent() {
  var optionIndex = this.surveyQuestion.options?.length
  var option = new Object as Option;
    option.sequenceNumber=this.randomNumber();
    this.surveyQuestion.options?.push(option);
    option.isOpen = true;
}
notValidSurvey(event:any) {
  this.notValidEvent.emit(event);
}

validateAnswerType():boolean{
  if(this.surveyQuestion.answerType==undefined){
    return true;
  }
  else{
    return false;
  }
}
validateInput():boolean{
  if(this.surveyQuestion.id==undefined || this.surveyQuestion.id==null){
    return true;
  }
  else{
    return false;
  }
}
questionAdd(event:any) {
  this.surveyQuestion.label=this.questionList.find(q=>q.id==event.value)!.label;
  this.surveyQuestion.options = [];
  this.showRadioBtn = true;
}
}
