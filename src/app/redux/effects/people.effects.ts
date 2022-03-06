import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import * as PeopleActions from '../actions/poeple.actions';
import { environment } from 'src/environments/environment';
import { IPerson } from 'src/app/shared/Models/IPerson';

@Injectable()
export class PeopleEffects {
  constructor(
    private actions$: Actions<PeopleActions.CURRENT_PEOPLE_ACTIONS>,
    private http: HttpClient
  ) {}

  fetchFriends$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(PeopleActions.FETCH_PEOPLE_REQUEST),
      switchMap((action) => {
        return this.http
          .get<IPerson[]>(`${environment.backendUrl}/socialmedia/random-users/`)
          .pipe(
            map((res) => {
              return PeopleActions.FETCH_PEOPLE_SUCCESS({
                people: res,
              });
            }),

            catchError((error) => {
              return of(PeopleActions.FETCH_PEOPLE_ERROR({ error }));
            })
          );
      })
    )
  );
}
