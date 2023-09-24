import axios from "axios"
import { createSlice } from "@reduxjs/toolkit";


export let initialState = {
    cart: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
            state.cart.push(action.payload)
        },
        remove(state, action) {
            state.cart = state.cart.filter(element => element.name !== action.payload.name);
        }
    }
})


const { add, remove } = cartSlice.actions

export const addToCart = (product) => async dispatch => {
    let updatedProduct = { inStock: product.inStock - 1 };
    let url = `https://api-js401.herokuapp.com/api/v1/products/${product._id}`;
    let results = await axios.put(url, updatedProduct)
    let record = results.data;
    dispatch(add(record));
};

export const removeFromCart = (product) => async dispatch => {
    let updatedProduct = { inStock: product.inStock + 1 };
    let url = `https://api-js401.herokuapp.com/api/v1/products/${product._id}`;
    let results = await axios.put(url, updatedProduct)
    let record = results.data
    dispatch(remove(record));
};


export default cartSlice.reducer