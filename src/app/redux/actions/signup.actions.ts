import { createAction, props, union } from '@ngrx/store';

export interface IUserRegister {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  birthdate: string;
  location: string;
}

export interface IUserRegisterResponse {
  first_name: string;
  last_name: string;
  email: string;
  birthdate: string;
  location: string;
}

export const USER_REGISTER_REQUEST = createAction(
  '[Auth] User Register Request',
  props<IUserRegister>()
);

export const USER_REGISTER_SUCCESS = createAction(
  '[Auth] User Register Success',
  props<IUserRegisterResponse>()
);

export const USER_REGISTER_ERROR = createAction(
  '[Auth] User Register Error',
  props<{ error: string }>()
);

export const USER_REGISTER_RESET = createAction('[Auth] User Register Reset');

const actions = union({
  USER_REGISTER_ERROR,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_RESET,
});

export type RegisterActions = typeof actions;
