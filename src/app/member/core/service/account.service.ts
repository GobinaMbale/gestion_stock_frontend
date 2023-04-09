import { UtilisateursService } from 'src/app/api/services/utilisateurs.service';
import { Injectable } from '@angular/core';
import { RolesDto, UtilisateurDto } from 'src/app/api/models';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private userIdentity: UtilisateurDto = {}

  constructor(
    private utilisateursService: UtilisateursService
  ) { }

  getCurrentUser(): Observable<UtilisateurDto> {
    return this.utilisateursService.currentUser();
  }

  hasAnyAuthority(roles: string[] | string):boolean {
    if(!this.userIdentity || !this.userIdentity.roles){
      return false;
    }

    if (!Array.isArray(roles)) {
      roles = roles;
    }

    return this.userIdentity.roles.some((role: RolesDto) => {
      roles.includes(role.roleName ?? '')

  }

  
}
