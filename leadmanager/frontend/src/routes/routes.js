import React, { Fragment } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Header from '../components/layout/Header';
import { Grid } from '@material-ui/core';

export const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => isAuthenticated ?
      (<Fragment>
        <Header>
          <Grid container style={{
            padding: '2%',
            width: '100%'
          }}>
            <Component {...props} />
          </Grid >
        </Header>
      </Fragment>) :
      <Redirect to={{ pathname: '/login' }} />}
  />
)

export const PublicRoute = ({ component: Component, ...rest, }) => (
  <Route
    {...rest}
    render={props => (<Component {...props} />)}
  ></Route >
)