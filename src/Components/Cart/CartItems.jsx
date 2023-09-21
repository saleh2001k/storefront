import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { connect } from 'react-redux'
import { setActiveCategory, setCategories, setProducts, setRenderList } from '../../store/categories'
import { addToCart, removeFromCart } from '../Reducers/CartReducer'


function CartItem(props) {

    return (

        <Box bgcolor={'#eeeeee'} width={'300px'}>
            <Card >
                <CardMedia
                    component={'img'}
                    image={`https://source.unsplash.com/random?${props.name}`}
                    height={'200px'} />
                <CardContent sx={
                    {
                        textAlign: 'center'
                    }
                }>
                    <Typography variant='h5'>{props.product.name}</Typography>
                    <Typography variant='body1'>Price: {props.price}$</Typography>
                    <Typography variant='body1'>Stock: {props.inStock}</Typography>
                </CardContent>
                <CardActions sx={
                    {
                        justifyContent: 'center'
                    }
                } >
                    <Button onClick={() => props.removeFromCart(props.product)} color={'secondary'}>Remove From Cart</Button>
                    <Button color={'secondary'}>More Details</Button>
                </CardActions>
            </Card>
        </Box>

    )
}
const mapStateToProps = state => ({
    productManager: state.categoryReducer,
    cart: state.cartReducer

})
const mapDispatchToProps = {
    setActiveCategory,
    setCategories,
    setProducts,
    setRenderList,
    addToCart,
    removeFromCart
}
export default connect(mapStateToProps, mapDispatchToProps)(CartItem)