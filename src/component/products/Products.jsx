import React from 'react'
import { Grid }  from '@material-ui/core';
import Product from '../Product/Product';

const products =[
    { id:1, name: 'shoes', price: '$34', des:'bfkdbfw jh cwjhdw h jhw' },
    { id:2, name: 'primer', price: '$14', des:'bfkdbfw jh cwjhdw h jhw' },
    { id:3, name: 'shades', price: '$4', des:'bfkdbfw jh cwjhdw h jhw' },
    { id:4, name: 'jackets', price: '$14', des:'bfkdbfw jh cwjhdw h jhw' },
    { id:5, name: 'clothes', price: '$14', des:'bfkdbfw jh cwjhdw h jhw' },
];

const Products = () => {
    return (
        <div>
            <Grid container justify='center' spacing={4}>
                {products.map((product)=>(
                    <Grid item key={product.id} >
                        <Product product={product}/>
                    </Grid>
                ))}

            </Grid>
        </div>
    )
}

export default Products
