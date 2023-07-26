import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmEventType, ConfirmationService, MessageService } from 'primeng/api';
import { DietService } from 'src/app/Services/diet.service';

@Component({
  selector: 'app-get-diet-list',
  templateUrl: './get-diet-list.component.html',
  styleUrls: ['./get-diet-list.component.css'],
  providers: [ConfirmationService,MessageService]
})
export class GetDietListComponent {
  diet!: any[];
  visible: boolean = false;
  isSubmit:boolean=false;
  errorMessage:string='';
  isDelete:boolean=false;
  data:any;
  addForm!:FormGroup;
  isVisible:boolean=false;
  position: string = 'center';
  updateData: any;
  updateForm=this.fb.group({
    id:new FormControl('',[Validators.required]),
    dietName:new FormControl('',[Validators.required]),
    proteinPercentage:new FormControl('',[Validators.required]),
    carbsPercentage:new FormControl('',[Validators.required]),
    fatPercentage:new FormControl('',[Validators.required]),
    isDefault:new FormControl(''),
    surplusPercentage:new FormControl('',[Validators.required]),
    deficitPercentage:new FormControl('',[Validators.required]),
    mealSchedule:new FormControl('',[Validators.required]),
    createdBy:new FormControl(''),
    isActive:new FormControl(true),
    isDeleted:new FormControl(false),
  });
  formGroup: FormGroup | undefined;
  constructor(private dietService: DietService,private fb: FormBuilder,private router:Router,private messageService:MessageService,private confirmationService:ConfirmationService) {}
  ngOnInit()
  {
    this.dietService.getDietList().subscribe({
      next: (result) => {
        this.diet=result.data;
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
      dietName:new FormControl('',[Validators.required]),
      proteinPercentage:new FormControl('',[Validators.required]),
      carbsPercentage:new FormControl('',[Validators.required]),
      fatPercentage:new FormControl('',[Validators.required]),
      isDefault:new FormControl(false),
      surplusPercentage:new FormControl('',[Validators.required]),
      deficitPercentage:new FormControl('',[Validators.required]),
      mealSchedule:new FormControl('',[Validators.required]),
      createdBy:new FormControl('')
    });
  }
  
showModal()
{
  this.visible=true;
  
}
addDiet()
{
  
  this.isSubmit = true
  if (this.addForm.invalid) {
    return;
  }
  else{
    this.visible=false;
       this.dietService.addNewDiet(this.addForm.value).subscribe((result)=>{
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Diet Added Successfully.' });
        this.ngOnInit();
       },(err)=>{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: this.errorMessage ?? "Something went wrong please try again." });
       })
        
     }
}
initializeUpdateForm(data: any):void{
  debugger
  this.updateForm=this.fb.group({
    id:new FormControl(data.id,[Validators.required]),
    dietName:new FormControl(data.dietName,[Validators.required]),
    proteinPercentage:new FormControl(data.proteinPercentage,[Validators.required]),
    carbsPercentage:new FormControl(data.carbsPercentage,[Validators.required]),
    fatPercentage:new FormControl(data.fatPercentage,[Validators.required]),
    isDefault:new FormControl(data.isDefault?? false),
    surplusPercentage:new FormControl(data.surplusPercentage,[Validators.required]),
    deficitPercentage:new FormControl(data.deficitPercentage,[Validators.required]),
    mealSchedule:new FormControl(data.mealSchedule,[Validators.required]),
    createdBy:new FormControl(''),
    isActive:new FormControl(true),
    isDeleted:new FormControl(false),
   

  })
  console.log(this.updateForm.value);
}
openUpdateModal(id:string)
{
 debugger
  this.dietService.getDietById(id).subscribe((res)=>{
  this.updateData=res.data;
  console.log(this.updateData)  ; 
  this.initializeUpdateForm(this.updateData);
  this.isVisible=true;
  },
  (err)=>{
    this.messageService.add({ severity: 'error', summary: 'Error', detail: this.errorMessage ?? "Something went wrong please try again." });
  })
}
updateDiet()
{
  this.isSubmit = true
  if (this.updateForm.invalid) {
    return;
  }
  
  else{
  this.dietService.updateDiet(this.updateForm.value).subscribe((result)=>{
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Diet Updated Successfully.' });
    this.isVisible=false;
    this.ngOnInit();
  },(err)=>{
    this.messageService.add({ severity: 'error', summary: 'Error', detail: this.errorMessage ?? "Something went wrong please try again." });
  })
}
}


confirm1(id:string) {
  this.data=id;
  this.isDelete=true;
}
deleteDiet()
{
  this.dietService.deleteDiet(this.data).subscribe((result)=>{
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Diet deleted Successfully' });
    this.isDelete=false;
    this.ngOnInit();
  },(err)=>{
    this.errorMessage = err.error.errorMessage;
    this.messageService.add({ severity: 'error', summary: 'Error', detail: this.errorMessage ?? "Something went wrong please try again." });
  })
}
cancel()
{
  this.isDelete=false;
}
}

