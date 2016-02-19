import React, {PropTypes} from 'react';
import PureComponent from './PureComponent';
import {connect} from 'react-redux';
import SendMessage from './SendMessage';
import MessageList from './MessageList';
import Login from './Login';

class App extends PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    messages: PropTypes.object.isRequired,
    login: PropTypes.object.isRequired
  };

  render() {
    const {dispatch, messages, login} = this.props;
    return (
      <div className="message-wrap col-lg-12">
        <Login dispatch={dispatch} showModal={login.get('loginRequired')}/>
        <MessageList dispatch={dispatch} messageList={messages}/>
        <div className="send-wrap ">
          <SendMessage dispatch={dispatch} autor={login.get('name')}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps)(App);
