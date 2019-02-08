import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { IconButton, Menu, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'
import InputBase from '@material-ui/core/InputBase'

const styles = {
  root: {
    flexGrow: 1,
    marginRight: -10
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  appBar: {
    padding: '1%',
    textAlign: (window.innerWidth <= 800) ? 'center' : 'left'
  }
};

export const Header = (props) => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar} color='primary'>
        <IconButton className={classes.menuButton} color='inherit' aria-label="menu">
          <Menu open={false}></Menu>
        </IconButton>
        <Typography variant="h4" color='inherit' className={classes.grow}>
          Lead Managers
        </Typography>
        {/* <Button color='inherit'></Button> */}
      </AppBar>
    </div >
  )
}

export default withStyles(styles)(Header)
