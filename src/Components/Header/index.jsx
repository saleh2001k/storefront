import React from 'react';
import { AppBar, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


function Header(props) {
    return (
        <AppBar position='static' color='primary'>
            <Toolbar>
                <IconButton component={Link} to='/' size='large' color='inherit' edge='start'>
                    <StorefrontIcon fontSize='large' />
                </IconButton>

                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                    Our Awesome Shop
                </Typography>

                <Stack>
                    <IconButton component={Link} to='/cart' color='inherit'>
                        <ShoppingCartIcon fontSize='medium' />  {props.cart.cart.length} 
                    </IconButton>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}

const mapStateToProps = state => ({
    cart: state.cartReducer
})
export default connect(mapStateToProps)(Header)