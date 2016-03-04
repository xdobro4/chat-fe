import * as ActionTypes from '../constants/ActionTypes';

export default socket => store => next => action => {
  console.log('in middleware', action);

  if (action.type === ActionTypes.SEND_MESSAGE) {
    console.log('emit');

    socket.emit('chat message', action);
  }
  return next(action);
};
