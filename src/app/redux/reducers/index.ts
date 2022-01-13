import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { locationReducer, LocationState } from './locations.reducers';
import { LoginReducer, LoginState } from './login.reducers';

export interface ApplicationState {
  locationState: LocationState;
  loginState: LoginState;
}

export const reducers: ActionReducerMap<ApplicationState> = {
  locationState: locationReducer,
  loginState: LoginReducer,
};

export const metaReducers: MetaReducer<ApplicationState>[] =
  !environment.production ? [] : [];
