import { createReducer, on } from '@ngrx/store';
import { IfriendRequest } from 'src/app/shared/Models/IFriendRequest';

import * as FriendsRequestsActions from '../actions/friendRequests.actions';

export interface FriendsRequestsState {
  requests: IfriendRequest[];
  loading: boolean;
  error: string;
  success: boolean;
}

export const intialFriendsRequestsState: FriendsRequestsState = {
  requests: undefined as any,
  loading: false,
  error: undefined as any,
  success: undefined as any,
};

export const FriendsRequestsReducer = createReducer(
  intialFriendsRequestsState,

  on(FriendsRequestsActions.FETCH_USERS_FRIENDS_REQUESTS_REQUEST, (state) => ({
    ...state,
    loading: true,
  })),

  on(
    FriendsRequestsActions.FETCH_USERS_FRIENDS_REQUESTS_SUCCESS,
    (state, { requests }) => ({
      ...state,
      success: true,
      loading: false,
      requests,
    })
  ),

  on(
    FriendsRequestsActions.FETCH_USERS_FRIENDS_REQUESTS_ERROR,
    (state, { error }) => ({
      ...state,
      success: false,
      loading: false,
      user: undefined as any,
      error: error,
    })
  )
);
