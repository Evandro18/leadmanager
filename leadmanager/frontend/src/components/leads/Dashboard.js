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

function Dashboard (props) {
  const { classes } = props
  return (
    <Grid container direction='row' justify='center'>
      <Grid item className={classes.gridItem}>
        {/* <Form /> */}
      </Grid>
      <Grid item className={classes.gridItem}>
        <Leads />
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(Dashboard)