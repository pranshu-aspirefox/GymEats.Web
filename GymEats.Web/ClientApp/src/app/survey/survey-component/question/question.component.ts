import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { log } from 'console';
import { Router } from '@angular/router';
import { Question } from 'src/app/@Core/Interface/common/Question';
import { QuestionService } from 'src/app/Services/question.service';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  questionList: any
  // @Input() questionList: Question[] | undefined;
  // @Input() isDisable!: boolean;
  formGroup!: FormGroup;

  options: any[] = [
      { name: 'Single answer', key: '1' },
      { name: 'Multi answer', key: '2' }
  ]
  constructor(private questionService: QuestionService) {
  }
  ngOnInit() {
    console.log('shdjsd');
    this.questionService.getQuestionDetails().subscribe({
      next: (result) => {
        this.questionList = result.data;
        console.log('questionList ', result);
      },
      error: (err) => {

      }
    });
    this.formGroup = new FormGroup({
      selectedCategory: new FormControl()
  });
  }
 
}
