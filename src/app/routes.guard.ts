import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { APP_ROUTES } from 'src/app/settings.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutesGuard implements CanActivate {

  constructor (
    private userService:UserService,
    private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let canNavigate = true;
      const path = next.routeConfig.path;
      if (path === APP_ROUTES.QUIZ || path === APP_ROUTES.SUMMARY) {
        canNavigate = !!this.userService.userInfo.name;
      }
      if (!canNavigate) {
        this.router.navigate([`/${APP_ROUTES.ERROR}`])
      }
    return canNavigate;
  }
}
