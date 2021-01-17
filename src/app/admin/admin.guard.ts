import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { BookingService } from './../admin/services/booking.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  private authenticVariable : string;
  constructor(
    private _router : Router
  ){
    this.authenticVariable = localStorage.getItem('authentication')
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.authenticVariable == "true") {
        return true;
      }
     this._router.navigate(['/admin/login'])
  }

}
