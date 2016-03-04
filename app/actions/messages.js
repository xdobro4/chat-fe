import * as ActionTypes from '../constants/ActionTypes';

export const sendMessage = (text, autor, created) => ({
  type: ActionTypes.SEND_MESSAGE,
  text,
  autor: autor,
  created: created
});

export const showMessage = (id, text, autor, created) => ({
  type: ActionTypes.SHOW_MESSAGE,
  text,
  id,
  autor: autor,
  created: created
});
