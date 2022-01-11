import { createReducer, on } from '@ngrx/store';
import { ILocation } from '../../shared/Models/Location';
import * as LocationActions from '../actions/location.actions';

export interface LocationState {
  locationData: ILocation[];
  loading: boolean;
  error: string;
  success: boolean;
}

const initialState: LocationState = {
  locationData: [],
  loading: false,
  error: undefined as any,
  success: false,
};

export const locationReducer = createReducer(
  initialState,

  on(LocationActions.FETCH_LOCATIONS_REQUEST, (state) => ({
    ...state,
    loading: true,
  })),

  on(LocationActions.FETCH_LOCATIONS_SUCCESS, (state, { locations }) => ({
    ...state,
    success: true,
    loading: false,
    locationData: locations,
  })),

  on(LocationActions.FETCH_LOCATIONS_ERROR, (state, { error }) => ({
    ...state,
    success: false,
    loading: false,
    locationData: [],
    error: error,
  }))
);
