import React, { Component } from 'react';
import { Route, Switch, Router } from 'react-router-dom';

import About from '../../pages/About';
import Features from '../../pages/Features';
import Pricing from '../../pages/Pricing';
import Contactus from '../../pages/Contactus';

import HomeComponent from '../home';
import { CallbackComponent } from '../callback';
import { NavBarComponent } from '../navbar'

import { history } from '../../helpers/history'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

import PrivateRoute from '../helpers/private-route'
import { connect } from 'react-redux';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: {
      main: '#f44336',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

class AppComponent extends Component {
  render() {
    return (

      <Router history={history}>
        <MuiThemeProvider theme={theme}>
          <NavBarComponent />
          <Switch>
            <Route exact path="/" component={HomeComponent} />
            <PrivateRoute loggedIn={this.props.loggedIn} path="/about" component={About} />
            <Route path="/features" component={Features} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/contactus" component={Contactus} />
            <Route exact path='/callback' component={CallbackComponent} />
          </Switch>
        </MuiThemeProvider>
      </Router>

    );
  }
}

function mapStateToProps(state) {
  const { loggedIn } = state;

  return {
    loggedIn
  };
}

const connectedAppComponent = connect(mapStateToProps)(AppComponent);
export { connectedAppComponent as AppComponent }; 