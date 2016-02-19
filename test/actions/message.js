import expect from 'expect';
import * as actions from '../../app/actions/messages';
import * as types from '../../app/constants/ActionTypes';

describe('actions', () => {
  it('should create an action to send a message', () => {
    const text = 'Finish docs';
    const autor = 'autor';
    const created = new Date;

    const expectedAction = {
      type: types.SEND_MESSAGE,
      id: 1,
      text: text,
      autor: autor,
      created: created
    };

    expect(actions.sendMessage(text, autor, created)).toEqual(expectedAction);
  });


  it('should create an action to delete a message', () => {
    const id = 1;

    const expectedAction = {
      type: types.DELETE_MESSAGE,
      id: 1
    };

    expect(actions.deleteMessage(id)).toEqual(expectedAction);
  });

  it('should create an action to delete all messages', () => {
    const expectedAction = {
      type: types.DELETE_ALL_MESSAGES
    };

    expect(actions.deleteAllMessages()).toEqual(expectedAction);
  });
});
