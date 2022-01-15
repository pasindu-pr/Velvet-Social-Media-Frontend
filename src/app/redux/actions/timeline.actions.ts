import { createAction, props, union } from '@ngrx/store';
import { IPost } from 'src/app/shared/Models/Post';

export const FETCH_TIMELINE_REQUEST = createAction(
  '[Timeline] Fetch Timeline Request'
);

export const FETCH_TIMELINE_SUCCESS = createAction(
  '[Timeline] Fetch Timeline Success',
  props<{ posts: IPost[] }>()
);

export const FETCH_TIMELINE_ERROR = createAction(
  '[Timeline] Fetch Timeline Error',
  props<{ error: string }>()
);

const actions = union({
  FETCH_TIMELINE_REQUEST,
  FETCH_TIMELINE_SUCCESS,
  FETCH_TIMELINE_ERROR,
});

export type TIMELINE_POSTS = typeof actions;
