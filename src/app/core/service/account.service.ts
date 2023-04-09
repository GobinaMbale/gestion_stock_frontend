import { Injectable } from '@angular/core';
import {UtilisateursService} from "../../../gs-api/src/services";
import {Observable} from "rxjs";
import {UtilisateurDto} from "../../../gs-api/src/models/utilisateur-dto";
import {RolesDto} from "../../../gs-api/src/models/roles-dto";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private userIdentity: UtilisateurDto = {};

  constructor(
    private utilisateursService: UtilisateursService
  ) { }

  getCurrentUser(): Observable<UtilisateurDto> {
    return this.utilisateursService.currentUser();
  }

  hasAnyAuthority(roles: string[] | string): boolean {
    if(!this.userIdentity || !this.userIdentity.roles) {
      return false;
    }

    if(!Array.isArray(roles)){
      roles = roles;
    }
    return this.userIdentity.roles.some((role: RolesDto) => {
      roles.includes(role.roleName ?? '');
    });
  }
}
