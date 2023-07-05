import { Component } from '@angular/core';
import { LoginModel } from './interfaces/login';
import { AuthService } from './Services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'gym-eats';
}
