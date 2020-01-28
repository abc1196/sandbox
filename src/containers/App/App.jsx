import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register'
import './App.scss';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, responsiveFontSizes, ThemeProvider  } from '@material-ui/core/styles';

// Create Material-UI Theme
let theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#fb8c00',
      // dark: will be calculated from palette.primary.main,
      contrastText: '#fff',
    },
    secondary: {
      main: '#666',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#fff',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

// Helper to make Typography font sizes in the theme responsive
theme = responsiveFontSizes(theme);

const App = () => {
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
