import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { locationReducer, LocationState } from './locations.reducers';
import { LoginReducer, LoginState } from './login.reducers';
import {
  UserRegisterInitialState,
  UserRegisterReducer,
} from './signup.reducers';

export interface ApplicationState {
  locationState: LocationState;
  loginState: LoginState;
  userRegisterState: UserRegisterInitialState;
}

export const reducers: ActionReducerMap<ApplicationState> = {
  locationState: locationReducer,
  loginState: LoginReducer,
  userRegisterState: UserRegisterReducer,
};

export const metaReducers: MetaReducer<ApplicationState>[] =
  !environment.production ? [] : [];
