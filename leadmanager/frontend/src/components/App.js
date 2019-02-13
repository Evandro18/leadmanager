import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid'
import { withStyles, withTheme } from '@material-ui/core/styles'
import { MuiThemeProvider } from '@material-ui/core'
import Header from './layout/Header'
import { theme } from './layout/theme';
import Snackbar from './snackbar';
import { SnackbarProvider } from 'notistack'
import Dashboard from './leads/Dashboard'
import { Provider } from 'react-redux'
import store from '../store'

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
        <Header />
        <Grid container className={classes.container}>
          <Dashboard />
        </Grid>
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