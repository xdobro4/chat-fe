import * as types from '../constants/ActionTypes';
import {List, Map} from 'immutable';

export function messageList(state = List(), action) {
  switch (action.type) {
    case types.SEND_MESSAGE:
      return state.push(Map({
        id: action.id,
        text: action.text,
        autor: action.autor,
        created: action.created
      }));

    case types.DELETE_MESSAGE:
      return state.filter(message => message.get('id') !== action.id);

    case types.DELETE_ALL_MESSAGES:
      return state.clear();

    default:
      return state;
  }
}

export default messageList;
