import React, { Fragment } from 'react'
import Form from './Form'
import Leads from './Leads'
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'
const styles = {
  gridItem: {
    width: '100%'
  }
}

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false
    }
    this.showForm = this.showForm.bind(this)
  }

  showForm () {
    this.setState({ showForm: !this.state.showForm })
  }

  render () {
    const { classes } = this.props
    return (
      <Grid container direction='row' justify='center' spacing={40} >
        {this.state.showForm ?
          <Grid item className={classes.gridItem}>
            <Form showForm={this.showForm} />
          </Grid> :
          <Grid item className={classes.gridItem}>
            <Leads showForm={this.showForm} />
          </Grid>}
      </Grid>
    )
  }
}

export default withStyles(styles)(Dashboard)