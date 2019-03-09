import React from 'react';

import { HomeComponent } from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Contactus from './pages/Contactus';
import Callback from './Callback';
import { NavBarComponent } from './components/navbar'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

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

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <NavBarComponent />

            <Route exact path="/" component={HomeComponent} />
            <Route path="/about" component={About} />
            <Route path="/features" component={Features} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/contactus" component={Contactus} />
            <Route exact path='/callback' component={Callback} />


      </MuiThemeProvider>

    );
  }
}




export default App;