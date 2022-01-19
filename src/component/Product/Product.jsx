import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

const Product = ({ product }) => {
    return (
        <Card>
            <CardMedia />
            <CardContent>
                <Typography>{product.name}</Typography>
                <Typography>{product.price}</Typography>
                <CardActions>
                <IconButton><AddShoppingCart /></IconButton>
                </CardActions>
                
            </CardContent>
        </Card>
    )
}

export default Product
