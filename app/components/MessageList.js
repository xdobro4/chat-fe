import React, {PropTypes, Component} from 'react';
import $ from 'jquery';
import Message from './Message';

class MessageList extends Component {
  static propTypes = {
    messageList: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  render() {
    const {messageList, dispatch} = this.props;
    return (
      <div className="msg-wrap">
        {messageList.map(message => {
          return (
            <Message key={message.get('id')} dispatch={dispatch} message={message}/>
          );
        })}
        <div id="break"></div>
      </div>
    );
  }

  componentDidUpdate() {
    $('html, body').animate({scrollTop: $('#break').offset().top});
  }
}

export default MessageList;
