import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Header from './layout/Header'
import Dashboard from './leads/Dashboard'

const styles = {
  container: {
    padding: '1%'
  }
}

class App extends Component {
  render () {
    const { classes } = this.props
    return <Fragment>
      <Header />
      <Grid container className={classes.container}>
        <Dashboard />
      </Grid>
    </Fragment>
  }
}

export const ContentApp = withStyles(styles)(App)

ReactDOM.render(<ContentApp />, document.getElementById('app'));