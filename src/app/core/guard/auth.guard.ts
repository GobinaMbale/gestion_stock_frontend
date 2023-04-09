import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from "../service/login.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(
    private loginService: LoginService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.loginService.isAuthentificated();
  }
  
}
