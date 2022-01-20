import React, { useState, useEffect } from 'react'
import { Grid }  from '@material-ui/core';

import Product from '../Product/Product.jsx';
import useStyles from './products';

const productsss =[
    { id:1, name: 'shoes', price: '$34', des:'bfkdbfw jh cwjhdw h jhw', image:'https://picsum.photos/200/300'},
    { id:2, name: 'primer', price: '$14', des:'bfkdbfw jh cwjhdw h jhw', image:'https://picsum.photos/200/300'},
    { id:3, name: 'shades', price: '$4', des:'bfkdbfw jh cwjhdw h jhw', image:'https://picsum.photos/200/300'  },
    { id:4, name: 'jackets', price: '$14', des:'bfkdbfw jh cwjhdw h jhw', image:'https://electronic-ecommerce.herokuapp.com/fantechHeadset.jpg'},
    { id:5, name: 'clothes', price: '$14', des:'bfkdbfw jh cwjhdw h jhw',image:'https://picsum.photos/200/300'},
];



const Products = () => {
    const classes = useStyles();

    const [products, setProducts]=useState([]);
    console.log(products);

    useEffect (() =>{
     list();
      },[])

    const list = async () => {
        const response = await  fetch ("https://electronic-ecommerce.herokuapp.com/api/v1/product");
        const jsonData=await response.json();
        //console.log(jsonData);
        setProducts(jsonData.data.product);
    }
    
    return (
        <main className='classes.content'>
            <div className={classes.toolbar} />
            <Grid container justifyContent='center' spacing={4} >
                {products.map((values)=>(
                    <Grid key={values.id} item xs={12} sm={6} md={4} lg={3}>
                        <Product values={values}/>
                    </Grid>
                ))}

            </Grid>
        </main>
    )
}

export default Products
