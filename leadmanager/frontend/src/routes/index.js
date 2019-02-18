import React, { Fragment } from 'react'
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
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
