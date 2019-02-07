import React, { Fragment } from 'react'
import Form from './Form'
import Leads from './Leads'
import { Grid } from '@material-ui/core';

export default function Dashboard () {
  return (
    <Grid container direction='column' justify='space-between' alignContent='space-between'>
      <Grid item>
        <Form />
      </Grid>
      <Grid item>
        <Leads />
      </Grid>
    </Grid>
  )
}
