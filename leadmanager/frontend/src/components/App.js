import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core';

class App extends Component {
  render () {
    return <Grid container>
      <Typography variant='h1'>Hello Python World</Typography>
    </Grid>
  }
}

ReactDOM.render(<App />, document.getElementById('app'));