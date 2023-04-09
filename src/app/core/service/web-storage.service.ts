import { Injectable } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root',
})
export class WebStorageService {
  constructor(
    private localStorageService: LocalStorageService,
    private sessionStorageService: SessionStorageService
  ) {}

  saveToken(token?: string, remember?: boolean): void {
    if (remember) {
      this.localStorageService.store('access_token_gestion_stock', token);
    } else {
      this.sessionStorageService.store('access_token_gestion_stock', token);
    }
  }

  getToken(): string {
    if (this.sessionStorageService.retrieve('access_token_gestion_stock')) {
      return this.sessionStorageService.retrieve('access_token_gestion_stock');
    } else {
      return this.localStorageService.retrieve('access_token_gestion_stock');
    }
  }

  clearToken(): void {
    this.sessionStorageService.clear('access_token_gestion_stock');
    this.localStorageService.clear('access_token_gestion_stock');
  }
}
