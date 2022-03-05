import { createAction, props, union } from '@ngrx/store';
import { Ifriend } from 'src/app/shared/Models/Friend';
import { IfriendRequest } from 'src/app/shared/Models/IFriendRequest';

export const FETCH_USERS_FRIENDS_REQUESTS_REQUEST = createAction(
  "[Friends] Fetch current user's friends requests"
);

export const FETCH_USERS_FRIENDS_REQUESTS_SUCCESS = createAction(
  "[Friends] Fetch current user's friends requests success",
  props<{ requests: IfriendRequest[] }>()
);

export const FETCH_USERS_FRIENDS_REQUESTS_ERROR = createAction(
  "[Friends] Fetch current user's friends requests error",
  props<{ error: string }>()
);

const actions = union({
  FETCH_USERS_FRIENDS_REQUESTS_SUCCESS,
  FETCH_USERS_FRIENDS_REQUESTS_REQUEST,
  FETCH_USERS_FRIENDS_REQUESTS_ERROR,
});

export type CURRENT_USERS_FRIENDS_REQUESTS_ACTIONS = typeof actions;
