import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { currentUserReducer, CurrentUserState } from './currentUser.reducers';
import { friendsReducer, FriendsState } from './friends.reducers';
import { locationReducer, LocationState } from './locations.reducers';
import { LoginReducer, LoginState } from './login.reducers';
import { postModelReducer, PostModelState } from './postModel.reducers';
import {
  UserRegisterInitialState,
  UserRegisterReducer,
} from './signup.reducers';
import { TimelinePostsReducer, TimelineState } from './timeline.reducers';

export interface ApplicationState {
  locationState: LocationState;
  loginState: LoginState;
  userRegisterState: UserRegisterInitialState;
  timelinePostsState: TimelineState;
  currentUserState: CurrentUserState;
  postModelState: PostModelState;
  currentUserFriendsState: FriendsState;
}

export const reducers: ActionReducerMap<ApplicationState> = {
  locationState: locationReducer,
  loginState: LoginReducer,
  userRegisterState: UserRegisterReducer,
  timelinePostsState: TimelinePostsReducer,
  currentUserState: currentUserReducer,
  postModelState: postModelReducer,
  currentUserFriendsState: friendsReducer,
};

export const metaReducers: MetaReducer<ApplicationState>[] =
  !environment.production ? [] : [];
