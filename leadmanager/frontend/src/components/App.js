import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid'
import { withStyles, withTheme } from '@material-ui/core/styles'
import { MuiThemeProvider } from '@material-ui/core'
import Header from './layout/Header'
import { theme } from './layout/theme';
import Snackbar from './snackbar';
import { SnackbarProvider, withSnackbar } from 'notistack'
import Dashboard from './leads/Dashboard'
import { Provider } from 'react-redux'
import store from '../store'
import PropTypes from 'prop-types';

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

const MyApp = withStyles(styles)((withTheme(theme)(withSnackbar(App))))

function integrationNotistack () {
  return (
    <SnackbarProvider
      maxSnack={3}>
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          {< MyApp />}
        </Provider>
      </MuiThemeProvider>
    </SnackbarProvider >
  )
}

export const ContentApp = integrationNotistack

ReactDOM.render(<ContentApp />, document.getElementById('app'));