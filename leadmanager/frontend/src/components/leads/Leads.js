import React, { Component } from 'react'
import { Typography, Paper, Table, TableHead, TableRow, TableBody, TableCell, IconButton } from '@material-ui/core';
import { connect } from 'react-redux'
import Delete from '@material-ui/icons/Delete'
import PropTypes from 'prop-types'
import { getLeads, deleteLeads } from '../../actions/leads'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  item: {
    margin: 5
  },
  paper: {
    overflowX: 'auto'
  }
}

const headers = [
  'Name',
  'E-mail',
  'Message',
  'Created',
  'Delete'
]

const formattDate = (date) => {
  const toFormat = new Date(date)
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return toFormat.toLocaleDateString('en-US', options)
}

class Leads extends Component {
  constructor(props) {
    super(props)
    this.deleteLeads = this.deleteLeads.bind(this)
  }
  static propTypes = {
    leads: PropTypes.array.isRequired
  }

  componentDidMount () {
    this.props.getLeads();
  }

  deleteLeads = (id) => {
    this.props.deleteLeads(id)
  }

  render () {
    const { classes, leads } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.item}>
          <Typography variant='h3'>Leads List</Typography>
        </div>
        <Paper className={classNames(classes.item, classes.paper)}>
          <Table>
            <TableHead>
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
                <TableCell onClick={() => this.deleteLeads(item.id)}><IconButton><Delete></Delete></IconButton></TableCell>
              </TableRow>)}
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  leads: state.leads.leads
})

export default connect(mapStateToProps, { getLeads, deleteLeads })(withStyles(styles)(Leads));
