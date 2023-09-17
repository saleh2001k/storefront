import React from 'react';
import { AppBar, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Link } from 'react-router-dom';

export default function CustomHeader() {
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
                        <ShoppingCartIcon fontSize='medium' />
                    </IconButton>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}
