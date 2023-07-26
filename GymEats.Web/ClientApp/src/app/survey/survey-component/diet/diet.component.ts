import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Diet } from 'src/app/@Core/Interface/common/Diet';
import { MessageService } from 'primeng/api';
import { Question } from 'src/app/@Core/Interface/common/Question';
import { Option } from 'src/app/@Core/Interface/common/Question';
import { DietService } from 'src/app/Services/diet.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.css'],
  providers: [MessageService]
})
export class DietComponent {
  dietList:Diet[]=[];
  @Input() questionOption: Option = new Object as Option;
  @Output() dietSelected: EventEmitter<string> =   new EventEmitter();

  @Input() multiAnswer: boolean = false;
  @Input() optionNo: number|undefined;
  @Input() questionList: Question[] | undefined;
  @Input() diet:Diet =new Object as Diet;
  isRequired: boolean = true;
  @Input() surveyQuestion: Question | undefined;
  @Input() disabled:boolean=true;
  constructor(private dietService:DietService) {
  }
  ngOnInit() {
    this.dietService.getDietList().subscribe({
      next: (result) => {
        this.dietList = result.data;
        console.log(this.dietList);
      }
    });
   
  }
  validateDiet():boolean
  {
    if(this.diet.id=="" ||  this.diet.id==undefined){
      return true;
    }
    else{
      return false;
    }
  }

  dietAdd(id:string){
    debugger;
    var diet = this.dietList.find(q=>q.id==id)!;
    this.diet.id= diet.id;
    this.diet.dietName= diet.dietName;
    this.diet.proteinPercentage= diet.proteinPercentage;
    this.diet.carbsPercentage= diet.carbsPercentage;
    this.diet.fatPercentage= diet.fatPercentage;
    this.diet.surplusPercentage=diet.surplusPercentage;
    this.diet.deficitPercentage=diet.deficitPercentage;
    this.diet.mealSchedule=diet.mealSchedule;
   }
}
