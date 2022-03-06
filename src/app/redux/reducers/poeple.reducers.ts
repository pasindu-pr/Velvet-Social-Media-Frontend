import { createReducer, on } from '@ngrx/store';
import { IPerson } from 'src/app/shared/Models/IPerson';

import * as PeopleActions from '../actions/poeple.actions';

export interface PeopleState {
  people: IPerson[];
  loading: boolean;
  error: string;
  success: boolean;
}

export const intialFriendsState: PeopleState = {
  people: undefined as any,
  loading: false,
  error: undefined as any,
  success: undefined as any,
};

export const peopleReducer = createReducer(
  intialFriendsState,

  on(PeopleActions.FETCH_PEOPLE_REQUEST, (state) => ({
    ...state,
    loading: true,
  })),

  on(PeopleActions.FETCH_PEOPLE_SUCCESS, (state, { people }) => ({
    ...state,
    success: true,
    loading: false,
    people,
  })),

  on(PeopleActions.FETCH_PEOPLE_ERROR, (state, { error }) => ({
    ...state,
    success: false,
    loading: false,
    user: undefined as any,
    error: error,
  }))
);
