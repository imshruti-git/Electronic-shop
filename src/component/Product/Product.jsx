import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import { CartState } from '../../context/Context'

import useStyles from './product';

const Product = ({ values }) => {
  const classes = useStyles();
  const { state: { cart }, dispatch } = CartState();

  console.log(cart);
  return (
    <Card className={classes.main}>
      <CardMedia className={classes.image} image='https://electronic-ecommerce.herokuapp.com/fantechHeadset.jpg' title={values.name} />
      <CardContent>
        
          <Typography variant="subtitle2">
            Product: {values.name}
          </Typography>
          <Typography variant="subtitle2">
            Price: {values.price}
          </Typography>
        
        <Typography variant="subtitle2">
           Stock: {values.stock}
          </Typography>
          <Typography variant="subtitle2">
            Category: {values.category}
          </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
      {cart.some((p) => p.id === values.id)? (
        <IconButton aria-label="Add to Cart" onClick={() => {
          dispatch({
            type: "REMOVE_FROM_CART",
            payload: values,
          }); 
        }}>
          
        <RemoveShoppingCartIcon />
        </IconButton>
      ) : 
        (<IconButton aria-label="Remove from Cart" onClick={() => {
          dispatch({
            type: "ADD_TO_CART",
            payload: values,
          }); 
        }}>
        <AddShoppingCart />
        </IconButton>)}
      </CardActions>
    </Card>
  );
};

export default Product;