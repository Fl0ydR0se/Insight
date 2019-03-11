import React, {Component} from 'react'
import auth0 from 'auth0-js';
import { withRouter } from 'react-router-dom';


class Auth extends Component{
  constructor() {
    super();
    this.auth0 = new auth0.WebAuth({
      // the following three lines MUST be updated
      domain: 'floydrose.eu.auth0.com',
      audience: 'https://floydrose.eu.auth0.com/userinfo',
      clientID: 'g2YDROYjBOH8RX6Tku70WGootwuuWjIC',
      redirectUri: 'https://insight-edu.herokuapp.com/callback',
      responseType: 'id_token',
      scope: 'openid profile',
      state: 'test'
    });

    this.isAuthenticated = false;

    let token = window.localStorage.getItem('user');

    if (token) {
      if (new Date().getTime() >= token.expiresAt) {
        window.localStorage.removeItem('user')
      } else {
        this.isAuthenticated = true;
        this.profile = token;
      }
    }

    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  signIn() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        debugger
        if (err) {
          return reject(err);
        }

        if (!authResult || !authResult.idToken) {
          return reject(err);
        }

        window.localStorage.setItem('user', authResult.idTokenPayload);

        resolve();
      });
    })
  }

  signOut() {
    window.localStorage.removeItem('user');
    this.props.history.replace('/');
  }

  render() {
    return (<span></span>)
  }
}

export default withRouter(new Auth);
