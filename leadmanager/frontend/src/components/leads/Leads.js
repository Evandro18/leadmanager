import React, { Component, Fragment } from 'react'
import { Typography, Paper, Table, TableHead, TableRow, TableBody, TableCell, IconButton, List, ListItem, ListItemText, Divider } from '@material-ui/core';
import { connect } from 'react-redux'
import Delete from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'
import PropTypes from 'prop-types'
import { getLeads, deleteLeads, setEditLead } from '../../actions/leads'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import Fab from '@material-ui/core/Fab'
import { theme } from '../layout/theme';

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
    overflowX: 'auto',
    fontSize: 14
  },
  fab: {
    alignSelf: 'flex-end',
    marginTop: '-30px'
  },
  tableCell: {
    backgroundColor: theme.palette.primary.light,
    color: '#fff'
  },
  dividerFullWidth: {
    margin: `5px 0 0 ${theme.spacing.unit * 2}px`,
  }
}

const headers = [
  'Name',
  'E-mail',
  'Message',
  'Created',
  'Edit',
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
    this.editLead = this.editLead.bind(this)

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

  editLead = (lead) => () => {
    this.props.setEditLead(lead)
    this.props.showForm()
  }

  render () {
    const { classes, leads } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.item}>
          <Typography variant='h4'>Leads List</Typography>
        </div>
        <Paper className={classNames(classes.item, classes.paper)}>
          {window.innerWidth >= 800 ?
            <Table>
              <TableHead>
                <TableRow>
                  {headers.map((item, i) => <TableCell key={i} className={classes.tableCell}>{item}</TableCell>)}
                </TableRow>
              </TableHead>
              <TableBody>
                {leads.map((item, i) => <TableRow key={i}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.message}</TableCell>
                  <TableCell>{formattDate(item.created_at)}</TableCell>
                  <TableCell ><IconButton onClick={this.editLead(item)}><Edit color='secondary'></Edit></IconButton></TableCell>
                  <TableCell onClick={() => this.deleteLeads(item.id)}><IconButton><Delete color='secondary'></Delete></IconButton></TableCell>
                </TableRow>)}
              </TableBody>
            </Table> :
            <List style={{ display: 'flex', flexDirection: 'column', alignItems: 'space-around' }}>
              {leads.map((item, i) => (
                <Fragment>
                  <ListItem key={i} alignItems='flex-start'>
                    <ListItemText
                      primary={item.name}
                      secondary={
                        <Fragment>
                          <Typography component='span' color='textPrimary'>{`email: ${item.email}`}</Typography>
                          <Typography component='span' color='textPrimary'>{`message: ${item.message}`}</Typography>
                        </Fragment>
                      } />
                  </ListItem>
                  <Divider component='li' />
                </Fragment>)
              )}
            </List>
          }
        </Paper>
        <Fab className={classes.fab} color='secondary' onClick={this.props.showForm}>+</Fab>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  leads: state.leads.leads
})

export default connect(mapStateToProps, { getLeads, deleteLeads, setEditLead })(withStyles(styles)(Leads));
