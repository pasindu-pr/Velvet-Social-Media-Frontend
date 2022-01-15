import { createReducer, on } from '@ngrx/store';
import { IUser } from 'src/app/shared/Models/user';
import * as CurrentUserActions from '../actions/currentUser.actions';

export interface CurrentUserState {
  user: IUser;
  loading: boolean;
  error: string;
  success: boolean;
}

export const intialCurrentUserState: CurrentUserState = {
  user: undefined as any,
  loading: false,
  error: undefined as any,
  success: undefined as any,
};

export const currentUserReducer = createReducer(
  intialCurrentUserState,

  on(CurrentUserActions.FETCH_CURRENT_USER_REQUEST, (state) => ({
    ...state,
    loading: true,
  })),

  on(CurrentUserActions.FETCH_CURRENT_USER_SUCCESS, (state, { user }) => ({
    ...state,
    success: true,
    loading: false,
    user,
  })),

  on(CurrentUserActions.FETCH_CURRENT_USER_ERROR, (state, { error }) => ({
    ...state,
    success: false,
    loading: false,
    user: undefined as any,
    error: error,
  }))
);
