import React from 'react'
import { Grid, Container }  from '@material-ui/core';
import Product from '../Product/Product.jsx';
import useStyles from './products';


const Products = ({ products }) => {
    const classes = useStyles();
  
    return (
        <main className='classes.content'>
            <div className={classes.toolbar} />
            <Container fixed>
            <Grid container justifyContent='center' spacing={4} >
               {products.map((values)=>(
                    <Grid key={values.id} item xs={12} sm={6} md={4} lg={3}>
                        <Product values={values}/>
                    </Grid>
                ))}

            </Grid>
            </Container>
        </main>
    )
}

export default Products
