import { Action, ActionReducer, State } from '@ngrx/store';
import { LOGOUT, logoutAction } from '../actions/logout.actions';

export function clearState(reducer: any): any {
  return function (state: any, action: Action): any {
    if (action.type === LOGOUT) {
      state = undefined;
    }
    return reducer(state, action);
  };
}
