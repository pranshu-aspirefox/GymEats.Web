import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DietService } from 'src/app/Services/diet.service';

@Component({
  selector: 'app-get-diet-list',
  templateUrl: './get-diet-list.component.html',
  styleUrls: ['./get-diet-list.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class GetDietListComponent {
  diet!: any[];
  visible:boolean=false;
  errorMessage:string=''
  constructor(private dietService: DietService,private fb: FormBuilder,private router:Router,private confirmationService: ConfirmationService,private messageService:MessageService) {}
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
  }
}
