import { Component } from '@angular/core';
import { SettingService } from 'src/app/Services/setting.service';
import { DialogModule } from 'primeng/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { error } from 'console';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
  providers: [MessageService]
})
export class SettingComponent {
  markupPercent: number|undefined;
  visible: boolean = false;
  isSubmit: boolean=false;
  /**
   *
   */
  updateMarkup=this.fb.group({
    id:new FormControl('',[Validators.required]),
    key:new FormControl('',[Validators.required]),
    value:new FormControl('',[Validators.required]),
  });
  updateData: any;
 
 
  
  constructor(private settingService:SettingService,private fb: FormBuilder, private messageService: MessageService) {
  }
  ngOnInit(){
    this.settingService.getSettinglist('markuppercent').subscribe({
      next:(result)=>{
      console.log('data',result.data);
     this.markupPercent=result.data.value;
     this.initializeUpdateForm(result.data);
    },
    error:(err)=>{
    }
    
    })
  }

  initializeUpdateForm(data: any ):void{
    this.updateMarkup=this.fb.group({
      id:new FormControl(data.id,[Validators.required]),
      key:new FormControl(data.key,[Validators.required]),
      value:new FormControl(data.value,[Validators.required])
    })

  }

  updateSetting()
  {
    this.isSubmit = true
  if (this.updateMarkup.invalid) {
    return;
  }
  
  else{
    this.settingService.updateMrkup(this.updateMarkup.value).subscribe({
      next:(res)=>{
        this.messageService.add({severity: 'success', summary:'Success', detail: 'Markup is updated successfully.'})
        this.visible = false;
        this.ngOnInit();
      },
      error:(err)=>{
        this.messageService.add({severity:'error',summary:'Error',detail:`${err.error.errorMessage}`});
      }
    })
  }
  }

  showDialogue()
  {
    this.visible=true;
  }

}
