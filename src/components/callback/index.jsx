import React, { Component } from 'react';
import { userActions } from '../../actions';
import { connect } from 'react-redux';

const styles = {
  div: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  img: {
    zIndex: '-1'
  }
}

class CallbackComponent extends Component {
  componentDidMount() {
    this.props.dispatch(userActions.login());
  }

  render() {
    return (
      <div style={styles.div}>
        <img src="spinner.gif" alt="waiting" style={styles.img}/>
      </div>
    );
  }
}

const connectedCallbackComponent = connect()(CallbackComponent);
export { connectedCallbackComponent as CallbackComponent }; 