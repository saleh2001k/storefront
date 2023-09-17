import React, { useEffect } from 'react';
import { Stack, Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import axios from 'axios';
import { setActiveCategory, setCategories, setProducts, setRenderList } from '../../store/categories';
import { connect } from 'react-redux';

function ProductList(props) {
    useEffect(() => {
        async function Categories() {
            try {
                let data = await axios.get(`https://api-js401.herokuapp.com/api/v1/categories`)
                props.setCategories(data.data.results)
            } catch (err) {
                console.log(err)
            }
        }

        async function Products() {
            try {
                let data = await axios.get(`https://api-js401.herokuapp.com/api/v1/products`)
                props.setProducts(data.data.results)
                props.setActiveCategory('electronics')
            } catch (err) {
                console.log(err)
            }
        }

        async function setToRenderProducts() {
            try {
                let toRender = props.productManager.categoryReducer.products.filter(element => element.category === props.productManager.categoryReducer.activeCategory)
                props.setRenderList(toRender)
            } catch (err) {
                console.log(err)
            }
        }

        Categories()
        Products()
        setToRenderProducts()
    }, [props.productManager.categoryReducer.activeCategory]);

    return (
        <div style={{ minHeight: '70vh' }}>
            <Stack direction={'row'} gap={'15px'} justifyContent='center' flexWrap={'wrap'} width='80%' margin={'auto'} marginY={'50px'} >
                {props.productManager.categoryReducer.toRender.map(product => (
                    <Box bgcolor={'#eeeeee'} width={'300px'} key={product['_id']}>
                        <Card>
                            <CardMedia
                                component={'img'}
                                image={`https://source.unsplash.com/random?${product.name}`}
                                height={'200px'} />
                            <CardContent sx={{
                                textAlign: 'center'
                            }}>
                                <Typography variant='h5'>{product.name}</Typography>
                                <Typography variant='body1'>Price: {product.price} inStock: {product.inStock}</Typography>
                            </CardContent>
                            <CardActions sx={{
                                justifyContent: 'center'
                            }}>
                                <Button color={'secondary'}>Add to Cart</Button>
                                <Button color={'secondary'}>More Details</Button>
                            </CardActions>
                        </Card>
                    </Box>
                ))}
            </Stack>
        </div>
    );
}

const mapStateToProps = state => ({
    productManager: state
});

const mapDispatchToProps = {
    setActiveCategory,
    setCategories,
    setProducts,
    setRenderList
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
