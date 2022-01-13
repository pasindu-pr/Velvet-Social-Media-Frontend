import { createReducer, on } from '@ngrx/store';
import * as LoginActions from '../actions/login.actions';

export interface LoginState {
  user: { accessToken: string; refreshToken: string };
  error: string;
  loading: boolean;
  success: boolean;
}

const initialState: LoginState = {
  user: { accessToken: '', refreshToken: '' },
  error: undefined as any,
  loading: false,
  success: undefined as any,
};

export const LoginReducer = createReducer(
  initialState,

  on(LoginActions.USER_LOGIN_REQUEST, (state) => ({
    ...state,
    loading: true,
  })),

  on(
    LoginActions.USER_LOGIN_SUCCESS,
    (state, { accessToken, refreshToken }) => ({
      ...state,
      user: {
        accessToken,
        refreshToken,
      },
      loading: false,
      success: true,
    })
  ),

  on(LoginActions.USER_LOGIN_ERROR, (state, { error }) => ({
    ...state,
    error: error,
    loading: false,
    success: false,
  })),

  on(LoginActions.USER_RESET, (state) => ({
    ...state,
    user: { accessToken: '', refreshToken: '' },
    error: undefined as any,
    loading: false,
    success: undefined as any,
  }))
);
