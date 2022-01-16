import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, forkJoin, map, of, switchMap } from 'rxjs';
import * as PostModelActions from '../actions/postModel.actions';
import { IPost, IPostComment, IPostLike } from 'src/app/shared/Models/Post';
import { environment } from 'src/environments/environment';

@Injectable()
export class PostModelEffects {
  constructor(
    private actions$: Actions<PostModelActions.POSTMODELACTIONS>,
    private http: HttpClient
  ) {}

  fetchPostModel$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(PostModelActions.FETCH_POST_MODEL_DETAILS_REQUEST),
      switchMap((action) => {
        const likes = this.http.get<IPostLike[]>(
          `${environment.backendUrl}/socialmedia/posts/${action.postid}/likes/`
        );

        const comments = this.http.get<IPostComment[]>(
          `${environment.backendUrl}/socialmedia/posts/${action.postid}/comments/`
        );

        const shares = this.http.get<any>(
          `${environment.backendUrl}/socialmedia/posts/${action.postid}/shares/`
        );

        const post = this.http.get<IPost>(
          `${environment.backendUrl}/socialmedia/posts/${action.postid}/`
        );

        return forkJoin([likes, comments, shares, post]).pipe(
          map((res) => {
            return PostModelActions.FETCH_POST_MODEL_SUCCESS({
              likes: res[0],
              comments: res[1],
              numOfShares: res[2].length,
              post: res[3],
            });
          }),

          catchError((error) => {
            return of(PostModelActions.FETCH_POST_MODEL_ERROR({ error }));
          })
        );
      })
    )
  );
}
