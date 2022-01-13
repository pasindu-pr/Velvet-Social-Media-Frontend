import { createAction, props, union } from '@ngrx/store';

export const USER_LOGIN_REQUEST = createAction(
  '[Auth] User Login Request',
  props<{ email: string; password: string }>()
);

export const USER_LOGIN_SUCCESS = createAction(
  '[Auth] User Login Success',
  props<{ accessToken: string; refreshToken: string }>()
);

export const USER_LOGIN_ERROR = createAction(
  '[Auth] User Login Failed',
  props<{ error: string }>()
);

export const USER_RESET = createAction('[Auth] User Login Reset');

const actions = union({
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
});

export type LoginActions = typeof actions;
