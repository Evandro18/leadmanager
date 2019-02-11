import React, { Component, Fragment } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { removeSnackbar, enqueueSnackbar } from '../../actions/notifications';

const Snack = (props) => (<Snackbar
  variant='error'
  anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
  open={props.open}
  onClose={props.handleClose}
  autoHideDuration={3000}
  ContentProps={{
    'aria-describedby': 'message-id'
  }}
  message={<span>{props.message}</span>}
/>)

class Alerts extends Component {

  constructor(props) {
    super(props)
    this.handleClose = this.handleClose.bind(this)
  }

  displayed = []

  storeDisplayed = (id) => {
    this.displayed = [...this.displayed, id]
  }

  handleClose = (item) => () => {
    const errors = { ...this.props.errors }
    delete errors.msg[item]
    this.props.removeSnackbar(errors)
  }

  componentDidUpdate () {
    const { notifications = [] } = this.props
    notifications.forEach((notification) => {
      if (this.displayed.includes(notification.key)) return
      this.props.enqueueSnackbar(notification.message, notification.options)
      this.storeDisplayed(notification.key)
      this.props.removeSnackbar(notification.key)
    })
  }

  render () {
    return null
  }
}
const mapStateToProps = state => ({
  notifications: state.notifications.notifications
});

const mapDispatchToProps = dispatch => ({
  enqueueSnackbar: (message, options) => dispatch(enqueueSnackbar(message, options)),
  removeSnackbar: (key) => dispatch(removeSnackbar(key))
})

export default connect(mapStateToProps, mapDispatchToProps)(Alerts)