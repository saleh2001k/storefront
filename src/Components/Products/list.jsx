/* eslint-disable react-hooks/exhaustive-deps */
import { Stack } from '@mui/material'
import Product from './index'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import axios from 'axios'
import { setActiveCategory, setCategories, setProducts, setRenderList, getProducts } from "../../store/categories";


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
        props.getProducts(props.productManager.categoryReducer.activeCategory)

        Categories()
    }, [props.cart.cart, props.productManager.categoryReducer.activeCategory])
    useEffect(() => {
        async function setToRenderProducts() {
            try {

                let toRender = props.productManager.categoryReducer.products.filter(element => element.category === props.productManager.categoryReducer.activeCategory)
                props.setRenderList(toRender)
            } catch (err) {
                console.log(err)
            }
        }
        setToRenderProducts()
    }, [props.productManager.categoryReducer.activeCategory, props.productManager.categoryReducer.products])

    return (
        <div style={{ minHeight: '70vh' }}>

            <Stack direction={'row'} gap={'15px'} justifyContent='center' flexWrap={'wrap'} width='80%' margin={'auto'} marginY={'50px'} >
            {props.productManager.categoryReducer.products.map(product => <Product key={product['_id']} name={product.name} category={product.category} inStock={product.inStock} price={product.price} product={product} />)}
            </Stack>
        </div>
    )
}
const mapStateToProps = state => ({
    productManager: state,
    cart: state.cartReducer
})
const mapDispatchToProps = {
    setActiveCategory,
    setCategories,
    setProducts,
    setRenderList,
    getProducts
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)