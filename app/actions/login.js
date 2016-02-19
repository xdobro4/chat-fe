import * as ActionTypes from '../constants/ActionTypes';

export const login = name => ({type: ActionTypes.LOGIN, name});
export const logout = name => ({type: ActionTypes.LOGOUT, name});
