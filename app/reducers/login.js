import {Map} from 'immutable';
import * as ActionTypes from '../constants/ActionTypes';

export const initialState = Map({
  loginRequired: true,
  name: null
});

export function login(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return state.set('loginRequired', false).set('name', action.name);
    case ActionTypes.LOGOUT:
      return state.set('loginRequired', true).set('name', null);
    default:
      return state;
  }
}

export default login;
