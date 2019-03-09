import React from 'react';
import {Route, Link, Redirect, withRouter } from 'react-router-dom';
import auth0Client from '../Auth'; 
function NavBar(props) {
  const signOut = () => {
    auth0Client.signOut();
    props.history.replace('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
          <Link className="nav-link"  exact to="/">Главная</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">Аbout</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/features">Features</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/pricing">Pricing</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contactus">Contact Us</Link>
          </li>

        </ul>
        <span className="navbar-text">
          {
            !auth0Client.isAuthenticated() &&
            <button className="btn btn-dark" onClick={auth0Client.signIn}>Вход</button>
          }
          {
            auth0Client.isAuthenticated() &&
            <div>
              <label className="user_name">{auth0Client.getProfile().name}</label>
              <img className="some" src={auth0Client.getProfile().picture} alt=""></img>
              <button className="btn btn-dark" onClick={() => {signOut()}}>Выйти</button>
            </div>
          }
        </span>
      </div>
    </nav>
  );
}



export default withRouter(NavBar);
