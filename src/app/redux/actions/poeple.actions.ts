import { createAction, props, union } from '@ngrx/store';
import { Ifriend } from 'src/app/shared/Models/Friend';
import { IPerson } from 'src/app/shared/Models/IPerson';

export const FETCH_PEOPLE_REQUEST = createAction(
  '[Friends] Fetch poeple request'
);

export const FETCH_PEOPLE_SUCCESS = createAction(
  '[Friends] Fetch poeple success',
  props<{ people: IPerson[] }>()
);

export const FETCH_PEOPLE_ERROR = createAction(
  '[Friends] Fetch poeple error',
  props<{ error: string }>()
);

const actions = union({
  FETCH_PEOPLE_REQUEST,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_ERROR,
});

export type CURRENT_PEOPLE_ACTIONS = typeof actions;
