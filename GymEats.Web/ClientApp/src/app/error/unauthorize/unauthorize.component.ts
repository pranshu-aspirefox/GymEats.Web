import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unauthorize',
  templateUrl: './unauthorize.component.html',
  styleUrls: ['./unauthorize.component.css']
})
export class UnauthorizeComponent {
  constructor(private router: Router){}

  redirectToLogin(){
    this.router.navigate(['/auth/login'])
  }
}
