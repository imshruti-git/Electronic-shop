import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './product';

const Product = ({ values }) => {
  const classes = useStyles();

  return (
    <Card className={classes.main}>
      <CardMedia className={classes.image} image='https://electronic-ecommerce.herokuapp.com/fantechHeadset.jpg' title={values.name} />
      <CardContent>
        <div className={classes.content}>
          <Typography gutterBottom variant="h5">
            {values.name}
          </Typography>
          <Typography variant="h5">
            {values.price}
          </Typography>
        </div>
        
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;