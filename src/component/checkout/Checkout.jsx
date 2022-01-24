import React from 'react';
import { Container, Typography, Grid, TextField, FormControlLabel, Checkbox, Button } from '@material-ui/core';
import useStyles from './checkout';

const Checkout = () => {
     const classes = useStyles();

  return (

      <Container maxWidth="md">
        <div className={classes.toolbar} /> 
        <div  className='classes.content'>
            <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="billingAddress"
            name="billingAddress"
            label="Billing Address"
            fullWidth
            autoComplete="address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="deliveryAddress"
            name="delliveryAddress"
            label="Delivery Address"
            fullWidth
            autoComplete=" address-line2"
          />
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Telephone Number"
              fullWidth
              autoComplete="Telephone Number"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
            id="date"
            label="Date"
            type="date"
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true,
        }}
      />
          </Grid>
        </Grid>
        
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
        <Grid item xs={12}>
           <Button variant="contained" color="primary" onClick={() => alert('Your order has been placed')}> Confirm Order</Button>
        </Grid>
      </Grid>
       </div>
      
     </Container>

  );
};


export default Checkout;