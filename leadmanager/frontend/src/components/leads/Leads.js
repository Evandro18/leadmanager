import React, { Component, Fragment } from 'react'
import { Grid, Typography, Paper, Table, TableHead, TableRow, TableBody, TableCell } from '@material-ui/core';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getLeads } from '../../actions/leads'
import { withStyles } from '@material-ui/core/styles'

const styles = {}

const headers = [
  'Name',
  'E-mail',
  'Message',
  'Created'
]

const formattDate = (date) => {
  const toFormat = new Date(date)
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return toFormat.toLocaleDateString('en-US', options)
}

class Leads extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired
  }

  componentDidMount () {
    this.props.getLeads();
  }

  render () {
    const { classes, leads } = this.props
    return (
      <Fragment>
        <Typography variant='h1'>Leads List</Typography>
        <Paper style={{ overflowX: 'auto' }}>
          <Table >
            <TableHead color='primary'>
              <TableRow>
                {headers.map((item, i) => <TableCell key={i}>{item}</TableCell>)}
              </TableRow>
            </TableHead>
            <TableBody>
              {leads.map((item, i) => <TableRow key={i}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.message}</TableCell>
                <TableCell>{formattDate(item.created_at)}</TableCell>
              </TableRow>)}
            </TableBody>
          </Table>
        </Paper>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  leads: state.leads.leads
})

export default connect(mapStateToProps, { getLeads })(withStyles(styles)(Leads));
