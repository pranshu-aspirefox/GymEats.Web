import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { QuestionService } from 'src/app/Services/question.service';

@Component({
  selector: 'app-get-questions',
  templateUrl: './get-questions.component.html',
  styleUrls: ['./get-questions.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class GetQuestionsComponent {
  errorMessage: string='';
  isfailed:boolean = false;
  isSubmit:boolean=false;
  visible: boolean = false;
  question!: any[];
  isVisible: boolean = false;
  addForm: FormGroup = this.fb.group
  ({
      label:new FormControl('',[Validators.required]),
      isPrimary:new FormControl(false),
      createdBy:new FormControl('')
  });
  updateForm=this.fb.group({
    id:new FormControl(''),
    label:new FormControl(''),
    isPrimary:new FormControl(false)
  });
  updateData:any;
     constructor(private questionService: QuestionService,private fb: FormBuilder,private router:Router,private confirmationService: ConfirmationService,private messageService:MessageService) {}
   
  ngOnInit() {
    
       this.questionService.getQuestionDetails().subscribe({
        next: (result) => {
          this.question=result.data;
          console.log('questionList ',result);
        },
        error: (err) => {
          this.errorMessage = err.error.errorMessage;
        }
      });
  }
  
  confirm(event: Event,data:string) {
    
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Are you sure that you want to delete?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.questionService.deleteQuestion(data).subscribe({
              next: (result) => {
                  this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Question deleted Successfully.' });
                  this.ngOnInit();
              },
              error: (err) => {
                this.errorMessage = err.error.errorMessage;
                this.messageService.add({ severity: 'error', summary: 'Error', detail: this.errorMessage ?? "Something went wrong please try again." });
              }
            })
        },
        reject: () => {
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
        }
    });
}
initializeForm(): void
{
  this.addForm=this.fb.group({
    Label:new FormControl('',[Validators.required]),
    isPrimary:new FormControl(false),
    createdBy:new FormControl('')
  })
  console.log(this.addForm.value);
}

showModal()
{
  this.visible=true;
  
}
addQuestion()
{
  debugger
  this.isSubmit = true;
  if (this.addForm.invalid) 
  {
      return;
  }
  else
  {
    this.questionService.addNewQuestion(this.addForm.value).subscribe((res)=>{
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Question Added Successfully.' });
    this.ngOnInit();
    this.visible=false;
    },
    (err)=>{
      this.errorMessage = err.error.errorMessage;
      this.messageService.add({ severity: 'error', summary: 'Error', detail: this.errorMessage ?? "Something went wrong please try again."  });
    })
  }
}

initializeUpdateForm(data: any):void{
  this.updateForm=this.fb.group({
    id:new FormControl(data.id,[Validators.required]),
    label:new FormControl(data.label,[Validators.required]),
    isPrimary:new FormControl(data.isPrimary)
  })
  console.log(this.updateForm.value);
}
updateQuestion()
{
  this.isSubmit = true
  if (this.updateForm.invalid) {
    return;
  }
  else{
  this.questionService.updateQuestion(this.updateForm.value).subscribe((result)=>{
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Diet Updated Successfully.' });
  },(err)=>{
    this.messageService.add({ severity: 'error', summary: 'Error', detail: this.errorMessage ?? "Something went wrong please try again." });
  })
}
}
openUpdateModal(id:string)
{
  this.questionService.getQuestionById(id).subscribe((res)=>{
  this.updateData=res.data;
  console.log(this.updateData)  ; 
  this.initializeUpdateForm(this.updateData);
  this.isVisible=true;
  },
  (err)=>{
    this.messageService.add({ severity: 'error', summary: 'Error', detail: this.errorMessage ?? "Something went wrong please try again." });
  })
}



}
