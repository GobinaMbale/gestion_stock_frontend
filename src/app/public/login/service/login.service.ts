import { Injectable } from '@angular/core';
import {AuthenticationService} from "../../../../gs-api/src/services";
import {AuthenticationRequest} from "../../../../gs-api/src/models/authentication-request";
import {map, Observable} from "rxjs";
import {AuthenticationResponse} from "../../../../gs-api/src/models/authentication-response";
import {Router} from "@angular/router";
import {WebStorageService} from "../../../core/service/web-storage.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private authenticateService: AuthenticationService,
    private router: Router,
    private webStorageService: WebStorageService
  ) { }

  login(body: AuthenticationRequest): Observable<void> {
    return this.authenticateService.authenticate(body)
      .pipe(map((response: AuthenticationResponse) => this.loginSuccess(response)));
  }

  private loginSuccess(authenticateResponse: AuthenticationResponse): void {
    this.webStorageService.saveToken(authenticateResponse.accessToken, true);
  }

  isAuthentificated(): boolean{
    if (this.webStorageService.getToken()){
      return true;
    }
    this.router.navigate(['login']).then(() => {});
    return false;
  }
}
