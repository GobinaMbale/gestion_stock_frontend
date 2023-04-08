import { Injectable } from '@angular/core';
import {LocalStorageService, SessionStorageService} from "ngx-webstorage";

@Injectable({
  providedIn: 'root'
})
export class WebStorageService {

  constructor(
    private localStorageService: LocalStorageService,
    private sessionStorageService: SessionStorageService,
  ) { }
}
