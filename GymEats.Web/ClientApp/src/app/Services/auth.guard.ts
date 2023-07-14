import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({providedIn: 'root'})

export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) { }
    canActivate (
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Promise<boolean> {
        let isAuthenticated  = localStorage.getItem('jwt');
        if (!Boolean(isAuthenticated)) {
            this.router.navigate(['/auth/login']);
        }
        return this.checkUserLogin(route,state);
    }

    checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {
      if (!this.authService.loginRequired) {
        if (route.data.role && route.data.role.indexOf(this.authService.getRole()) === -1) {
          this.router.navigate(['/error/unauthorize']);
          return false;
        }
        return true;
      }
      this.router.navigate(['/auth/login']);
      return false;
    }
}