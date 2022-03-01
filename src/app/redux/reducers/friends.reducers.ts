import { createReducer, on } from '@ngrx/store';
import { Ifriend } from 'src/app/shared/Models/Friend';

import * as FriendsActions from '../actions/friends.action';

export interface FriendsState {
  friends: Ifriend[];
  loading: boolean;
  error: string;
  success: boolean;
}

export const intialFriendsState: FriendsState = {
  friends: undefined as any,
  loading: false,
  error: undefined as any,
  success: undefined as any,
};

export const friendsReducer = createReducer(
  intialFriendsState,

  on(FriendsActions.FETCH_USERS_FRIENDS_REQUEST, (state) => ({
    ...state,
    loading: true,
  })),

  on(FriendsActions.FETCH_USERS_FRIENDS_SUCCESS, (state, { friends }) => ({
    ...state,
    success: true,
    loading: false,
    friends,
  })),

  on(FriendsActions.FETCH_USERS_FRIENDS_ERROR, (state, { error }) => ({
    ...state,
    success: false,
    loading: false,
    user: undefined as any,
    error: error,
  }))
);
