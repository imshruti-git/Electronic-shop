import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Button, Paper, ButtonBase } from '@material-ui/core';
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
   

    const [total, setTotal] = useState();

    useEffect(() => {
      setTotal(cart.reduce((acc,cur) => acc + Number(cur.price), 0 ));
    },[cart]);

    const renderEmptyCart = () => (
      <Typography variant="subtitle1">You have no items in your shopping cart,
        <Link className={classes.link} to="/">   Start adding some!</Link>
      </Typography>
    );

    const renderCart = () => (
      <>
       <Paper className={classes.paper}>
       {cart.map((values) => (
        <Grid container spacing={4}>
          <Grid item>
          <Typography className={classes.image}>
            <img src={image} alt="image" className={classes.img} />
          </Typography>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                {values.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                {values.price}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {values.category}
                </Typography>
              </Grid>
              
            </Grid>
            <Grid item>
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: values,
           }); 
 }} />
       </IconButton>
            </Grid>
          </Grid>
        </Grid>
        ))}
      </Paper>
      

      </>
    );
  return(
    <Container fixed>
        <div className={classes.toolbar} />
        <div  className='classes.content'>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>              
                <Typography  className="classes.title" variant="h5" gutterBottom>Your Shopping Cart</Typography>
                { !cart.length ? renderEmptyCart() : renderCart() }   
            </Grid>
            <Grid item xs={12} sm={6}>   
            <Paper className={classes.paper}>         
                <Typography  className="classes.title" variant="h5" gutterBottom>Subtotal ({cart.length}) items:</Typography>
                <Typography  className="classes.title" variant="h6" gutterBottom>Total:$ {total} </Typography>
                <Button component={Link} to="/checkout" variant="contained" disabled={cart.length===0} color="primary"> Go to Chekout Form </Button>
              </Paper>
            </Grid>
        </Grid>

        
        </div>
       
      
     </Container>
  );
};

export default Cart;
