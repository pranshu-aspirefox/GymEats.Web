import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  items: MenuItem[] | undefined;
  constructor(private router: Router){}
  ngOnInit() 
  {
    
    this.router.navigate(['/admin/dashboard']);

    this.items = [
        {
            label: 'Dashboard',
            icon: 'fa-solid fa-gauge-high fa-lg',
            iconClass: 'menu-icon',
            command: (click) => {this.router.navigate(['/admin/dashboard'])}
        },
        {
            label: 'Survey',
            icon: 'fa-solid fa-clipboard-user fa-lg',
            iconClass: 'menu-icon',
            command: () => {}
        },
        {
          label: 'User Details',
          icon: 'fa-solid fa-user fa-lg',
          iconClass: 'menu-icon',
          command: (click) => {this.router.navigate(['/admin/get-users'])}
        },
        {
          label: 'Questions',
          icon: 'fa-solid fa-clipboard-question fa-lg',
          iconClass: 'menu-icon',
          command: (click) => {this.router.navigate(['/admin/questions'])}
        },
        {
          label: 'Options',
          icon: 'fa-solid fa-clipboard-list fa-lg',
          iconClass: 'menu-icon',
          command: (click) => {this.router.navigate(['/admin/options'])}
        },
        {
          label: 'Diets',
          icon: 'fa-solid fa-utensils fa-lg',
          iconClass: 'menu-icon',
          command: (click) => {this.router.navigate(['/admin/diets'])}
        },
        {
           label:'Usage and Stats',
           icon: 'fa-solid fa-chart-line fa-lg',
           iconClass: 'menu-icon',
           command:()=>{}
        },
        {
          label:'Setting',
          icon: 'fa-solid fa-gear fa-lg',
          iconClass: 'menu-icon',
          command:(click)=>{this.router.navigate(['/admin/setting'])}
        }
        
    ];
  }
  routeToDashboard(){
    this.router.navigate(['/admin/dashboard']);
  }

  logout(){
    localStorage.removeItem('jwt');
    this.router.navigate(['/auth/login']);
  }
  changePassword(){
    this.router.navigate(['/auth/passwordChange']);
  }
}
