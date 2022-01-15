import { createAction, props, union } from '@ngrx/store';
import { IUser } from 'src/app/shared/Models/user';

export const FETCH_CURRENT_USER_REQUEST = createAction(
  '[CurrentUser] Fetch CurrentUser Request'
);

export const FETCH_CURRENT_USER_SUCCESS = createAction(
  '[CurrentUser] Fetch CurrentUser Success',
  props<{ user: IUser }>()
);

export const FETCH_CURRENT_USER_ERROR = createAction(
  '[CurrentUser] Fetch CurrentUser Error',
  props<{ error: string }>()
);

const actions = union({
  FETCH_CURRENT_USER_REQUEST,
  FETCH_CURRENT_USER_SUCCESS,
  FETCH_CURRENT_USER_ERROR,
});

export type CURRENT_USER_ACTIONS = typeof actions;
