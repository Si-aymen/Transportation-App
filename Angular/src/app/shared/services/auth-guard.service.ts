import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, of} from 'rxjs';
import {SessionStorageService} from './user/session-storage.service';
import {AuthenticationService} from './user/authentication.service';
import {switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthenticationService,
    private sessionService: SessionStorageService,
    private router: Router
  ) { }


    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const requiredRoles = next.data['roles'] as Array<string>;

        return this.authService.checkAuthState().pipe(
            switchMap(isAuthenticated => {
                if (!isAuthenticated) {
                    return of(this.router.parseUrl('/sessions/signin'));
                }
                const user = this.sessionService.getUser();
                if (user && user.roles.some(role => requiredRoles.includes(role))) {
                    return of(true);
                }
                return of(this.router.parseUrl('/sessions/signin'));
            })
        );
    }
}
