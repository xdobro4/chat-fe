import expect from 'expect';
import {List, Map} from 'immutable';
import {messageList} from '../../app/reducers/messages';
import * as types from '../../app/constants/ActionTypes';

describe('todos messageList', () => {
  it('should return the initial state', () => {
    expect(
      messageList(undefined, {})
    ).toEqual(List());
  });

  describe('should handle SEND_MESSAGE', () => {
    const created = new Date;

    it('should handle to clear state', () => {
      expect(
        messageList(List(), {
          id: 0,
          type: types.SEND_MESSAGE,
          text: 'Run the tests',
          autor: 'autor',
          created: created
        })
      ).toEqual(
        List().push(Map({
          id: 0,
          text: 'Run the tests',
          autor: 'autor',
          created: created
        }))
      );
    });

    it('should handle to  existing list', () => {
      expect(
        messageList(List().push(
          Map({
            id: 0,
            text: 'Use Redux',
            autor: 'autor',
            created: created
          })),
          {
            id: 1,
            type: types.SEND_MESSAGE,
            text: 'Run the tests',
            autor: 'autor',
            created: created
          }
        )
      ).toEqual(
        List().push(
          Map({
            id: 0,
            text: 'Use Redux',
            autor: 'autor',
            created: created
          }), Map({
            id: 1,
            text: 'Run the tests',
            autor: 'autor',
            created: created
          }))
      );
    });
  });
});
