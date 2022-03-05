import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import * as FriendRequestsActions from '../actions/friendRequests.actions';
import { environment } from 'src/environments/environment';
import { IfriendRequest } from 'src/app/shared/Models/IFriendRequest';

@Injectable()
export class FriendsRequestsEffects {
  constructor(
    private actions$: Actions<FriendRequestsActions.CURRENT_USERS_FRIENDS_REQUESTS_ACTIONS>,
    private http: HttpClient
  ) {}

  fetchFriendsRequests$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(FriendRequestsActions.FETCH_USERS_FRIENDS_REQUESTS_REQUEST),
      switchMap((action) => {
        return this.http
          .get<IfriendRequest[]>(
            `${environment.backendUrl}/socialmedia/friends-requests/`
          )
          .pipe(
            map((res) => {
              return FriendRequestsActions.FETCH_USERS_FRIENDS_REQUESTS_SUCCESS(
                {
                  requests: res,
                }
              );
            }),

            catchError((error) => {
              return of(
                FriendRequestsActions.FETCH_USERS_FRIENDS_REQUESTS_ERROR({
                  error,
                })
              );
            })
          );
      })
    )
  );
}
