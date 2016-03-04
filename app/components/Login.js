import React, {PropTypes, Component} from 'react';
import {Button, Modal} from 'react-bootstrap';
import {login} from '../actions/login';

class Login extends Component {
  static propTypes = {
    showModal: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  submit(e) {
    e.preventDefault();

    const input = this.refs.login;
    const value = input.value.trim();

    if (value) {
      this.props.dispatch(login(value));
      input.value = '';
    }
  }

  render() {
    const {showModal} = this.props;
    return (
      <Modal show={showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>User info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={e => this.submit(e)}>
            <input className="form-control" type="text" placeholder="Enter chat name" ref="login"/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close}>Set</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default Login;
