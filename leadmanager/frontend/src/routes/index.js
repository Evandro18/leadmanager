import React, { Fragment } from 'react'
import { Switch } from 'react-router-dom'
import App from '../components/App'

export default function index (props) {
  return (
    <Fragment>
      <Switch>
        {props.routes}
      </Switch>
    </Fragment>
  )
}
