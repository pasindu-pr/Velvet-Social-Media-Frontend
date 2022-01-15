import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { IPost } from 'src/app/shared/Models/Post';
import { environment } from 'src/environments/environment';
import * as TimelineActions from '../actions/timeline.actions';

@Injectable()
export class TimelineEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  signUpEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(TimelineActions.FETCH_TIMELINE_REQUEST),
      mergeMap((action) => {
        return this.http
          .get<IPost[]>(
            `${environment.backendUrl}/socialmedia/timeline/?format=json`
          )
          .pipe(
            map((res) => {
              return TimelineActions.FETCH_TIMELINE_SUCCESS({ posts: res });
            }),

            catchError((err) => {
              return of(TimelineActions.FETCH_TIMELINE_ERROR({ error: err }));
            })
          );
      })
    )
  );
}
