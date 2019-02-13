import React, { Component } from 'react'
import { Grid, Typography, TextField, Paper, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'
import { theme } from '../layout/theme';
import { connect } from 'react-redux'
import { createLead, setEditLead, updateLead } from '../../actions/leads'
import { enqueueSnackbar } from '../../actions/notifications';

const styles = {
  paper: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    padding: '2%',
    fontSize: 14
  },
  button: {
    alignSelf: 'flex-start',
    width: 'fit-content',
    color: theme.palette.secondary,
    backgroundColor: theme.palette.secondary.main,
    marginTop: '1%'
  }
}

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...props.lead
    }
  }

  onChange = (field) => ({ target }) => {
    const { lead } = this.props
    console.log(lead)
    const updated = {
      ...lead,
      [field]: target.value
    }
    console.log(updated)
    this.props.setEditLead(updated)
  }

  submit = () => {
    const { id = null, name = '', email = '', message = '', created_at } = this.props.lead
    if (id) {
      console.log('Update: ', id)
      this.props.updateLead({ id, name, email, message, created_at })
    } else {
      this.props.createLead({ name, email, message })
    }

    if (this.props.leads.filter((lead) => lead.email === email).length > 0) {
      this.props.setEditLead({ id, name: '', email: '', message: '', created_at: '' })
      this.props.showForm()
    }
  }

  render () {
    const { classes } = this.props
    return (
      <Grid container direction='column'>
        <Grid item>
          <Typography variant='h4'>Add Lead Form</Typography>
        </Grid>
        <Grid item>
          <Paper className={classes.paper}>
            <TextField fullWidth label='Name' value={this.props.lead.name} onChange={this.onChange('name')} />
            <TextField fullWidth label='E-mail' value={this.props.lead.email} onChange={this.onChange('email')} />
            <TextField fullWidth label='Message' value={this.props.lead.message} onChange={this.onChange('message')} />
            <Button onClick={this.submit} className={classes.button}>Submit</Button>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  leads: state.leads.leads,
  lead: state.leads.currentLead,
  errors: state.errors
})

const mapDispatchToProps = dispatch => ({
  createLead: async ({ name, email, message }) => dispatch(createLead({ name, email, message })),
  updateLead: async ({ id, name, email, message, created_at }) => dispatch(updateLead({ id, name, email, message, created_at })),
  setEditLead: ({ id, name, email, message, created_at }) => dispatch(setEditLead({ id, name, email, message, created_at })),
  enqueueSnackbar: ({ ...notification }) => dispatch(enqueueSnackbar({ ...notification }))
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Form))
