import React, {Component, PropTypes} from 'react';
import {sendMessage} from '../actions/messages';

class SendMessage extends Component {

  static propTypes = {
    autor: PropTypes.string,
    dispatch: PropTypes.func.isRequired
  };

  shouldComponentUpdate() {
    // component has no props or state change so it is safe to just return `false`
    return false;
  }

  sendMessage(e) {
    e.preventDefault();

    const input = this.refs.message;
    const value = input.value.trim();
    const autor = this.props.autor;

    if (value) {
      this.props.dispatch(sendMessage(value, autor, new Date));
      input.value = '';
    }
  }

  render() {
    return (
      <form onSubmit={e => this.sendMessage(e)}>
        <input className="form-control" type="text" placeholder="Enter message" ref="message"/>
      </form>
    );
  }
}

export default SendMessage;
