import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { withTheme } from '@material-ui/core/styles'
import { MuiThemeProvider } from '@material-ui/core'
import { theme } from './layout/theme';
import Snackbar from './snackbar';
import { SnackbarProvider } from 'notistack'
import { Provider } from 'react-redux'
import store from '../store'
import RouterHandler from '../routes'
import { HashRouter as Router } from 'react-router-dom'
import Dashboard from '../components/leads/Dashboard'
import { PublicRoute, PrivateRoute } from '../routes/routes';

export const routes = [
  <PrivateRoute exact path='/' component={Dashboard}></PrivateRoute>,
  <PublicRoute exact path='/login' component={() => <Fragment>Faça Login Aqui</Fragment>}></PublicRoute>
]

class App extends Component {
  render () {
    return (
      <Fragment>
        <Snackbar />
        <Router>
          <RouterHandler routes={routes} />
        </Router>
      </Fragment>
    )
  }
}

const MyApp = (withTheme(theme)(App))

function integrationNotistack () {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <SnackbarProvider>
          {< MyApp />}
        </SnackbarProvider >
      </Provider>
    </MuiThemeProvider >
  )
}

export const ContentApp = integrationNotistack

ReactDOM.render(<ContentApp />, document.getElementById('app'));