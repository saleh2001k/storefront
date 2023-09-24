import axios from "axios"
import { createSlice } from "@reduxjs/toolkit"


export let initialState = {
    activeCategory: 'electronics',
    categories: [],
    products: [],
    toRender: []
}

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setActiveCategory(state, action) {
            state.activeCategory = action.payload
        },
        setCategories(state, action) {
            state.categories = action.payload
        },
        setProducts(state, action) {
            state.products = action.payload
        },
        setRenderList(state, action) {
            state.toRender = action.payload
        }
    }
})

export const { setActiveCategory, setCategories, setProducts, setRenderList } = categorySlice.actions
export const getProducts = (activeCategory) => async dispatch => {

    try {

        let data = await axios.get(`https://api-js401.herokuapp.com/api/v1/products`)
        let currentProducts = data.data.results.filter(element => element.category === activeCategory)
        dispatch(setProducts(currentProducts))
    } catch (err) {
        console.log(err)

    }
}


export default categorySlice.reducer