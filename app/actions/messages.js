import * as ActionTypes from '../constants/ActionTypes';

let idCounter = 0;
export const sendMessage = (text, autor, created) => ({
  type: ActionTypes.SEND_MESSAGE,
  text,
  id: ++idCounter,
  autor: autor,
  created: created
});
// export const completeTodo = id => ({ type: ActionTypes.COMPLETE_TODO, id});
export const deleteMessage = id => ({type: ActionTypes.DELETE_MESSAGE, id});
export const deleteAllMessages = () => {
  idCounter = 0;
  return {type: ActionTypes.DELETE_ALL_MESSAGES};
};
