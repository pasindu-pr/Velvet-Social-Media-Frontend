import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { locationReducer, LocationState } from './locations.reducers';

export interface ApplicationState {
  locationState: LocationState;
}

export const reducers: ActionReducerMap<ApplicationState> = {
  locationState: locationReducer,
};

export const metaReducers: MetaReducer<ApplicationState>[] =
  !environment.production ? [] : [];
