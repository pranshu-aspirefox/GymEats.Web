import { Component } from '@angular/core';
import { Diet } from 'src/app/@Core/Interface/common/Diet';
import { DietService } from 'src/app/Services/diet.service';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.css']
})
export class DietComponent {
  dietList:Diet[] | undefined;
  constructor(private dietService:DietService) {
  }
  ngOnInit()
  {
    this.dietService.getDietList().subscribe((result)=>{
    this.dietList=result.data;
    },(err)=>{
      console.log("err",err);
    })
  }
}
