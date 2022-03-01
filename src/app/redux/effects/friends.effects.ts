import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import * as FriendsActions from '../actions/friends.action';
import { environment } from 'src/environments/environment';
import { Ifriend } from 'src/app/shared/Models/Friend';

@Injectable()
export class FriendsEffects {
  constructor(
    private actions$: Actions<FriendsActions.CURRENT_USERS_FRIENDS_ACTIONS>,
    private http: HttpClient
  ) {}

  fetchFriends$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(FriendsActions.FETCH_USERS_FRIENDS_REQUEST),
      switchMap((action) => {
        return this.http
          .get<Ifriend[]>(`${environment.backendUrl}/socialmedia/friends/`)
          .pipe(
            map((res) => {
              return FriendsActions.FETCH_USERS_FRIENDS_SUCCESS({
                friends: res,
              });
            }),

            catchError((error) => {
              return of(FriendsActions.FETCH_USERS_FRIENDS_ERROR({ error }));
            })
          );
      })
    )
  );
}
