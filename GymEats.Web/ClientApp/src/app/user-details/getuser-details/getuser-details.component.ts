import { Component } from '@angular/core';
import { UserDetailsService } from 'src/app/Services/user-details.service';
import { UserDetails } from 'src/app/interfaces/UserDetails';

@Component({
  selector: 'app-getuser-details',
  templateUrl: './getuser-details.component.html',
  styleUrls: ['./getuser-details.component.css']
})
export class GetuserDetailsComponent {
  usersInfo!: UserDetails[];
  errorMessage: any='';
  constructor(private userDetailsService: UserDetailsService){}
  ngOnInit() 
  {
    this.userDetailsService.getUserDetails().subscribe({
      next:(result)=>{
        this.usersInfo = result.data;
      },
      error:()=>{
        console.log("something went wrong.");
      }
  })
  }
}
