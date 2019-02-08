import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid'
import { withStyles, withTheme } from '@material-ui/core/styles'
import { MuiThemeProvider } from '@material-ui/core'
import Header from './layout/Header'
import Dashboard from './leads/Dashboard'
import { Provider } from 'react-redux'
import store from '../store'
import { theme } from './layout/theme';


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
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <Fragment>
            <Header />
            <Grid container className={classes.container}>
              <Dashboard />
            </Grid>
          </Fragment>
        </Provider>
      </MuiThemeProvider>
    )
  }
}

export const ContentApp = withStyles(styles)(withTheme(theme)(App))

ReactDOM.render(<ContentApp />, document.getElementById('app'));