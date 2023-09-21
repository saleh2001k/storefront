import React from 'react'
import { connect } from 'react-redux'
import { Container, Stack, Typography } from '@mui/material'
import CartItems from './CartItems'

function Cart(props) {
    return (
        <div style={{ minHeight: '100vh' }}>
            <div >
                <Container maxWidth="sm">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom textTransform={'uppercase'} marginTop={'40px'}>
                        My Cart
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        Current Items
                    </Typography>
                </Container>
            </div>
            <Stack direction={'row'} gap={'15px'} justifyContent='center' flexWrap={'wrap'} width='80%' margin={'auto'} marginY={'50px'} >
                {props.cart.cart?.map(product => <CartItems key={product['_id']} name={product.name} category={product.category} inStock={product.inStock} price={product.price} product={product} />)}
            </Stack>
        </div >
    )
}

const mapStateToProps = state => ({
    productManager: state,
    cart: state.cartReducer
})

export default connect(mapStateToProps)(Cart)