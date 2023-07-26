import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Diet } from 'src/app/@Core/Interface/common/Diet';
import { Question } from 'src/app/@Core/Interface/common/Question';
import { Option } from 'src/app/@Core/Interface/common/Question';
import { OptionService } from 'src/app/Services/option.service';
@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css'],
  providers: [MessageService]
})
export class OptionComponent {
  optionsList: Option[] =[];
  selected: any;
  @Input() questionOption: Option = new Object as Option;
  @Input() disabled:boolean=true;
  @Input() multiAnswer: boolean = false;
  @Input() optionNo: Number | undefined;
  @Input() questionList: Question[] =[];
  isRequired: boolean = true;
   @Input() surveyQuestion: Question = new Object as Question;
  showRadioBtn: boolean=false;
  constructor(private optionService: OptionService) {
  }
  ngOnInit(): void {
    this.optionService.getOptionList().subscribe({
      next: (result) => {
        this.optionsList = result.data;
      }
    });
    this.questionList=this.questionList.filter(x=>x.id!=this.surveyQuestion.id)
      if(this.questionOption.question!=undefined ){
        this.questionOption.question.sequenceNumber=this.randomNumber();
      }
  }
  onChange(evt: any) {
    if (this.questionOption.question_Diet==1) {
      this.questionOption.question = new Object as Question;
      this.questionOption.question.sequenceNumber = this.randomNumber();
      this.questionOption.question.options = [];
      this.questionOption.diet = undefined;
    }
    else {
      this.questionOption.diet = new Object as Diet;
      this.questionOption.question = undefined;
    }
  }
  randomNumber() {
    return Math.random();
  }
  deleteOption(optionNo:any)
  {
    this.surveyQuestion.options?.splice((optionNo-1),1);
  }
  toggleExclusive(event:any) {
 
  }
  validateOption():boolean
  {
    if(this.questionOption.id==undefined || this.questionOption.id=="")
    return true;
    else
    return false;
  }

  validateOptionType():boolean
  {
    if(this.questionOption.question_Diet==undefined)
      return true;
      else
      return false;
  }

  optionAdd(event:any)
  {
    this.questionOption.label=this.optionsList.find(q=>q.id==event.value)!.label;
  }
}
