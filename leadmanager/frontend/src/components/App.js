import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid'
import { withStyles, withTheme } from '@material-ui/core/styles'
import { MuiThemeProvider } from '@material-ui/core'
import Header from './layout/Header'
import { theme } from './layout/theme';
import Snackbar from './snackbar';
import { SnackbarProvider } from 'notistack'
import { Provider } from 'react-redux'
import store from '../store'
import RouterHandler from '../routes'
import { HashRouter as Router, Route } from 'react-router-dom'
import Dashboard from '../components/leads/Dashboard'

export const routes = [
  <Route exact path='/' component={Dashboard}></Route>,
  <Route exact path='/test' component={() => <Fragment></Fragment>}></Route>
]
const styles = {
  container: {
    padding: '2%',
    width: '100%'
  }
}


class App extends Component {
  render () {
    const { classes } = this.props
    return (
      <Fragment>
        <Snackbar />
        <Router>
          <Fragment>
            <Header />
            <Grid container className={classes.container}>
              <RouterHandler routes={routes} />
            </Grid>
          </Fragment>
        </Router>
      </Fragment>
    )
  }
}

const MyApp = withStyles(styles)((withTheme(theme)(App)))

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