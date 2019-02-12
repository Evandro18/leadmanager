import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeSnackbar, enqueueSnackbar } from '../../actions/notifications';
import { bindActionCreators } from 'redux';

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
    delete errors.message[item]
    this.props.removeSnackbar(errors)
  }

  shouldComponentUpdate ({ notifications: newSnacks = [] }) {
    const { notifications: currentSnacks } = this.props;
    let notExists = false;
    for (let i = 0; i < newSnacks.length; i += 1) {
      if (notExists) continue;
      notExists = notExists || !currentSnacks.filter(({ key }) => newSnacks[i].key === key).length;
    }
    return notExists;
  }

  componentDidUpdate () {
    const { notifications = [] } = this.props
    console.log(notifications);
    notifications.forEach((notification) => {
      if (this.displayed.includes(notification.key)) return
      this.props.enqueueSnackbar(notification)
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
})

const mapDispatchToProps = dispatch => bindActionCreators({
  enqueueSnackbar,
  removeSnackbar
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Alerts)