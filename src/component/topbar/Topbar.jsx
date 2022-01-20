import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';


import useStyles from './topbar';

const Topbar = () => {
  
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appbar} color="primary">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img src='image\logo.jpg' alt="logo" height="45px" className={classes.image} /> Electronic shop
          </Typography>
          <div className={classes.grow} />
          
          <div className={classes.button}>
            <IconButton aria-label="add to shopping cart" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Topbar;