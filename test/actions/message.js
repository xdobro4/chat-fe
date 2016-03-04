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
      text: text,
      autor: autor,
      created: created
    };

    expect(actions.sendMessage(text, autor, created)).toEqual(expectedAction);
  });

});
