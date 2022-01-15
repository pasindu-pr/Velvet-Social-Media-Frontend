import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import * as CurrentUserActions from '../actions/currentUser.actions';
import { IUser } from 'src/app/shared/Models/user';
import { environment } from 'src/environments/environment';

@Injectable()
export class CurrentUserEffects {
  constructor(
    private actions$: Actions<CurrentUserActions.CURRENT_USER_ACTIONS>,
    private http: HttpClient
  ) {}

  fetchLocations$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(CurrentUserActions.FETCH_CURRENT_USER_REQUEST),
      switchMap((action) => {
        return this.http
          .get<IUser>(`${environment.backendUrl}/auth/users/me/`)
          .pipe(
            map((res) => {
              return CurrentUserActions.FETCH_CURRENT_USER_SUCCESS({
                user: res,
              });
            }),

            catchError((error) => {
              return of(CurrentUserActions.FETCH_CURRENT_USER_ERROR({ error }));
            })
          );
      })
    )
  );
}
