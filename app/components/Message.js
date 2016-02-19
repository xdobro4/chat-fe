import React, {PropTypes, Component} from 'react';

class Message extends Component {
  static propTypes = {
    message: PropTypes.object.isRequired
  };

  render() {
    const message = this.props.message.toObject();

    return (
      <div className="media msg">
        <div className="media-body">
          <small className="pull-right time">
            <i className="fa fa-clock-o"></i> {message.created.toString()}
          </small>
          <h5 className="media-heading">{message.autor}</h5>
          <small className="col-lg-10">{message.text}</small>
        </div>
      </div>
    );
  }
}

export default Message;
