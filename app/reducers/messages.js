import * as types from '../constants/ActionTypes';
import {List, Map} from 'immutable';

export function messageList(state = List(), action) {
  switch (action.type) {
    case types.SHOW_MESSAGE:
      return state.push(Map({
        id: action.id,
        text: action.text,
        autor: action.autor,
        created: action.created
      }));

    default:
      return state;
  }
}

export default messageList;
