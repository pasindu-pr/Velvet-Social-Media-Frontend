import { createReducer, on } from '@ngrx/store';
import * as UserRegisterActions from '../actions/signup.actions';

export interface UserRegisterInitialState {
  user: UserRegisterActions.IUserRegisterResponse;
  error: string;
  loading: boolean;
  success: boolean;
}

export const initialState: UserRegisterInitialState = {
  user: {
    first_name: '',
    last_name: '',
    email: '',
    birthdate: '',
    location: '',
    profile_picture: '',
  },

  loading: undefined as any,
  success: undefined as any,
  error: '',
};

export const UserRegisterReducer = createReducer(
  initialState,

  on(UserRegisterActions.USER_REGISTER_REQUEST, (state) => ({
    ...state,
    loading: true,
  })),

  on(
    UserRegisterActions.USER_REGISTER_SUCCESS,
    (
      state,
      {
        first_name,
        last_name,
        email,
        birthdate,
        location,
        profile_picture: profile_pic,
      }
    ) => ({
      ...state,
      user: {
        first_name,
        last_name,
        email,
        birthdate,
        location,
        profile_picture: profile_pic,
      },
      loading: false,
      success: true,
    })
  ),

  on(UserRegisterActions.USER_REGISTER_ERROR, (state, { error }) => ({
    ...state,
    error: error,
    loading: false,
    success: false,
  })),

  on(UserRegisterActions.USER_REGISTER_RESET, (state) => ({
    ...initialState,
  }))
);
