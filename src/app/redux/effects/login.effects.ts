import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as LoginActions from '../actions/login.actions';

@Injectable()
export class LoginEffects {
  constructor(
    private actions: Actions,
    private http: HttpClient,
    private router: Router
  ) {}

  loginUserEffect = createEffect(() =>
    this.actions.pipe(
      ofType(LoginActions.USER_LOGIN_REQUEST),

      switchMap((action) => {
        return this.http
          .post<{ access: string; refresh: string }>(
            `${environment.backendUrl}/auth/jwt/create/`,
            {
              email: action.email,
              password: action.password,
            }
          )
          .pipe(
            map((res) => {
              localStorage.setItem('accessToken', res.access);
              localStorage.setItem('refreshToken', res.refresh);

              this.router.navigate(['/']);

              return LoginActions.USER_LOGIN_SUCCESS({
                accessToken: res.access,
                refreshToken: res.refresh,
              });
            }),

            catchError((error) => {
              return of(
                LoginActions.USER_LOGIN_ERROR({ error: error.error.detail })
              );
            })
          );
      })
    )
  );
}
