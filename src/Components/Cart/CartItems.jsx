import {  Accordion, AccordionDetails, AccordionSummary, Box, Button, ButtonGroup, Card, CardActions, CardContent, CardMedia, Stack, Typography  } from '@mui/material'
import React from 'react'
import { connect } from 'react-redux'
import { setActiveCategory, setCategories, setProducts, setRenderList, getProducts } from '../../store/categories'
import { addToCart, removeFromCart } from '../../store/cartReducer'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom'
import axios from 'axios'


function CartItem(props) {
    function handleAddToCart(product) {
        console.log(product)
        console.log(props.cart.cart)
        let found = props.cart.cart.filter(element => element.name === product.name)
        if (!found[0]) {
            props.addToCart(product)
        }
        else return
    }
    useEffect(() => {
        async function Categories() {
            try {
                let data = await axios.get(`https://api-js401.herokuapp.com/api/v1/categories`)
                props.setCategories(data.data.results)
            } catch (err) {
                console.log(err)
            }
        }

        props.getProducts(props.productManager.activeCategory)
        Categories()
    }, [props.cart.cart, props.productManager.activeCategory])
    return (

        <Box bgcolor={'#eeeeee'} width={'800px'} >
            <Card sx={{ height: '100%' }}>
                <CardMedia
                    component={'img'}
                    image={`https://source.unsplash.com/random?${props.name}`}
                    height={'500px'} />
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
                    <Button variant='contained' size='large' onClick={() => handleAddToCart(props.product)} color={'secondary'}>Buy</Button>
                </CardActions>
                <CardContent>
                    <Stack>
                        <Typography>Related Items</Typography>
                        <ButtonGroup size='large'>
                            {props.productManager.products
                                ?.reduce((buttons, item) => {
                                    if (item.category === props.product.category && item.name !== props.name) {
                                        buttons.push(
                                            <Button
                                                key={item._id}
                                                variant='outlined'
                                                color='secondary'
                                                component={Link}
                                                to={`/product/${item._id}`}
                                            >{item.name}</Button>
                                        );
                                    }
                                    return buttons;
                                }, [])}


                        </ButtonGroup>
                    </Stack>
                </CardContent>
                <CardContent>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Specification</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                this {props.product.name} is definetly the choice for you, it makes your life better, and it is one of the best products we have, don't hesitate to buy it
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>Reviews</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Andy: Best quality products
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                </CardContent>
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
    removeFromCart,
    getProducts
}
export default connect(mapStateToProps, mapDispatchToProps)(CartItem)