import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmEventType, ConfirmationService, MessageService } from 'primeng/api';
import { OptionService } from 'src/app/Services/option.service';
import { GetOptionList } from 'src/app/interfaces/OptionModel';
import { UpdateOptionModal } from 'src/app/interfaces/UpdateUption';

@Component({
  selector: 'app-get-option-list',
  templateUrl: './get-option-list.component.html',
  styleUrls: ['./get-option-list.component.css'],
  providers: [ConfirmationService,MessageService]
})
export class GetOptionListComponent {
  options!: GetOptionList[];
  visible: boolean = false;
  isSubmit:boolean=false;
  errorMessage:string=''
  addForm!:FormGroup;
  isVisible:boolean=false;
  updateData: any;
  updateForm=this.fb.group({
    id:new FormControl('',[Validators.required]),
    label:new FormControl('',[Validators.required]),
    isExclusive:new FormControl(),
  });
  constructor(private optionService: OptionService,private fb: FormBuilder,private router:Router,private messageService:MessageService,private confirmationService:ConfirmationService) {}
 
  ngOnInit()
  {
    this.optionService.getOptionList().subscribe({
      next: (result) => {
        this.options=result.data;
        console.log('dietList ',result);
      },
      error: (err) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: this.errorMessage ?? "Something went wrong please try again." });
      }
    });
  this.initializeForm();
  }
  initializeForm(): void
  {
    this.addForm= this.fb.group({
      label:new FormControl('',[Validators.required]),
      isExclusive:new FormControl(false),
      createdBy:new FormControl('')
      
    });
  }
  showModal()
  {
    this.visible=true
  }
addOption()
{
  this.isSubmit = true
  if (this.addForm.invalid) {
    return;
  }
  else{
    this.visible=false;
       this.optionService.addNewOption(this.addForm.value).subscribe((result)=>{
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Option Added Successfully.' });
        this.ngOnInit();
       },(err)=>{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: this.errorMessage ?? "Something went wrong please try again." });
       })
        
     }
}
initializeUpdateForm(data: UpdateOptionModal):void{
  this.updateForm=this.fb.group({
    id:new FormControl(data.id,[Validators.required]),
    label:new FormControl(data.label,[Validators.required]),
    isExclusive:new FormControl(data.isExclusive)
  })
}
openUpdateModal(id:string)
{
  this.optionService.getOptionById(id).subscribe((res)=>{
    this.updateData=res.data;
    console.log(this.updateData)  ; 
    this.initializeUpdateForm(this.updateData);
    this.isVisible=true;
    },
    (err)=>{
      this.messageService.add({ severity: 'error', summary: 'Error', detail: this.errorMessage ?? "Something went wrong please try again." });
    })
}
updateOption()
{
  this.isSubmit = true
  if (this.updateForm.invalid) {
    return;
  }
  
  else{
  this.optionService.updateOption(this.updateForm.value).subscribe((result)=>{
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Option Updated Successfully.' });
    this.ngOnInit();
    this.isVisible=false;
  },(err)=>{
    this.messageService.add({ severity: 'error', summary: 'Error', detail: this.errorMessage ?? "Something went wrong please try again." });
  })
}
}
confirm1(id:string) {
  this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.optionService.deleteOption(id).subscribe((result)=>{
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Option deleted Successfully' });
            this.ngOnInit();
          },(err)=>{
            this.errorMessage = err.error.errorMessage;
            this.messageService.add({ severity: 'error', summary: 'Error', detail: this.errorMessage ?? "Something went wrong please try again." });
          })
         
      },
      reject: (type: ConfirmEventType) => {
          switch (type) {
              case ConfirmEventType.REJECT:
                  this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'Option not Deleted' });
                  break;
              case ConfirmEventType.CANCEL:
                  this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
                  break;
          }
      }
  });
}
}
