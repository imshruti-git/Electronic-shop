import React from 'react'
import FaceIcon from '@material-ui/icons/Face';
import { ShoppingCart } from '@material-ui/icons';
import { AppBar, Toolbar, Typography, IconButton, Badge } from '@material-ui/core';
import useStyles from './topbar';



const Topbar = () => {
    const classes = useStyles();
    return (
       <AppBar position='fixed' className= 'classes.appbar' color='inherit'>
           <Toolbar>
           <FaceIcon />
            <Typography variant='h5' className='classes.text'>Hello World</Typography>
            <div className='classes.grow' />
        
            
            <IconButton color="secondary" aria-label="add to shopping cart">
                <Badge badgeContent={2}> 
                <ShoppingCart />
                </Badge>
                
            </IconButton>
           </Toolbar>
       </AppBar>
               
               
    )
}

export default Topbar
