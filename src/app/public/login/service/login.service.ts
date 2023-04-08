import { Injectable } from '@angular/core';
import {AuthenticationService} from "../../../../gs-api/src/services";
import {AuthenticationRequest} from "../../../../gs-api/src/models/authentication-request";
import {Observable} from "rxjs/dist/types";
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

  login(body: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.authenticateService.authenticate(body);
  }
}
