import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { CartState } from '../../context/Context';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Avatar from '@material-ui/core/Avatar';
import useStyles from './cart';

const Cart = () => {
    const classes = useStyles();
    const { state: { cart }, dispatch } = CartState();
    const image ="https://electronic-ecommerce.herokuapp.com/fantechHeadset.jpg";
   // const isEmpty = true;

    const renderEmptyCart = () => (
      <Typography variant="subtitle1">You have no items in your shopping cart,
        <Link className={classes.link} to="/">   Start adding some!</Link>
      </Typography>
    );

    const renderCart = () => (
      <>
       <List className={classes.root}>
       {cart.map((values) => (
          <ListItem key={values.id} height="large">
            <ListItemAvatar>
              <Avatar
                alt={values.name}
                src={image}
              />
            </ListItemAvatar>

            <ListItemText primary={values.name} />
            <ListItemText secondary={values.price} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: values,
                  }); 
        }} />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>    
        ))}
    </List>

      </>
    );
  return(
    <Container maxWidth="sm">
        <div className={classes.toolbar} />
        <div  className='classes.content'>
        <Typography  className="classes.title" variant="h5" gutterBottom>Your Shopping Cart</Typography>
        { !cart.length ? renderEmptyCart() : renderCart() }
        
        </div>
       
      
     </Container>
  );
};

export default Cart;
