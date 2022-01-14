import { Action, createAction, props, union } from '@ngrx/store';
import { ILocation } from '../../shared/Models/Location';

export const FETCH_LOCATIONS_REQUEST = createAction(
  '[LOCATIONS] Fetch Locations Request',
  props<{ query: string }>()
);

export const FETCH_LOCATIONS_SUCCESS = createAction(
  '[LOCATIONS] Fetch Locations Success',
  props<{ locations: ILocation[] }>()
);

export const FETCH_LOCATIONS_ERROR = createAction(
  '[LOCATIONS] Fetch locations error',
  props<{ error: string }>()
);

export const FETCH_LOCATIONS_RESET = createAction(
  '[LOCATIONS] Location Results Reset'
);

const actions = union({
  FETCH_LOCATIONS_REQUEST,
  FETCH_LOCATIONS_SUCCESS,
  FETCH_LOCATIONS_ERROR,
  FETCH_LOCATIONS_RESET,
});

export type LOCATION_ACTIONS = typeof actions;
