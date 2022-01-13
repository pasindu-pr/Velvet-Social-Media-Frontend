import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as SignupActions from '../actions/signup.actions';

@Injectable()
export class UserSignupEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router
  ) {}

  signUpEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(SignupActions.USER_REGISTER_REQUEST),

      mergeMap((action) => {
        return this.http
          .post<SignupActions.IUserRegisterResponse>(
            `${environment.backendUrl}/auth/users/`,
            {
              first_name: action.first_name,
              last_name: action.last_name,
              email: action.email,
              password: action.password,
              birthdate: action.birthdate,
              location: action.location,
            }
          )
          .pipe(
            map((res) => {
              this.router.navigate(['/auth/login']);
              return SignupActions.USER_REGISTER_SUCCESS({
                first_name: res.first_name,
                last_name: res.last_name,
                email: res.email,
                birthdate: res.birthdate,
                location: res.location,
              });
            }),

            catchError((error) => {
              return of(
                SignupActions.USER_REGISTER_ERROR({ error: error.error.detail })
              );
            })
          );
      })
    )
  );
}
