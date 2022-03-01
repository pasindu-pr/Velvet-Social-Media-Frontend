import { createAction, props, union } from '@ngrx/store';
import { Ifriend } from 'src/app/shared/Models/Friend';

export const FETCH_USERS_FRIENDS_REQUEST = createAction(
  "[Friends] Fetch current user's Friends"
);

export const FETCH_USERS_FRIENDS_SUCCESS = createAction(
  "[Friends] Fetch current user's friends success",
  props<{ friends: Ifriend[] }>()
);

export const FETCH_USERS_FRIENDS_ERROR = createAction(
  "[Friends] Fetch current user's friends error",
  props<{ error: string }>()
);

const actions = union({
  FETCH_USERS_FRIENDS_REQUEST,
  FETCH_USERS_FRIENDS_SUCCESS,
  FETCH_USERS_FRIENDS_ERROR,
});

export type CURRENT_USERS_FRIENDS_ACTIONS = typeof actions;
