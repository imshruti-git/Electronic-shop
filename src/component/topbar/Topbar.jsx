import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { CartState } from '../../context/Context'
import useStyles from './topbar';

const Topbar = () => {
  
  const classes = useStyles();
  const { state: { cart }, } = CartState();
  return (
    <>
      <AppBar position="fixed" className={classes.appbar} color="primary">
        <Toolbar>
          <Typography component={Link} to="/" variant="h5" className={classes.title} color="inherit">
            <img src='image\logo.jpg' alt="logo" height="45px" className={classes.image} /> Electronic shop
          </Typography>
          <div className={classes.grow} />
          
          <div className={classes.button}>
            <IconButton component={Link} to="/cart" aria-label="add to shopping cart" color="inherit">
              <Badge badgeContent={cart.length} color="secondary">
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