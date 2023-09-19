export let initialState = {
    cart: []
}


export function cartReducer(state = initialState, action) {
    switch (action.type) {

        case 'ADD-TO-CART': {
            if (!state.cart.includes(action.payload)) {

                return { ...state, cart: [...state.cart, action.payload] }
            }
            return state
        }
        case 'REMOVE-FROM-CART': {
            return { ...state, cart: state.cart.filter(element => element.name !== action.payload.name) }
        }
        default: return state
    }
}

export const addToCart = (payload) => {
    console.log(payload)
    return {
        type: 'ADD-TO-CART',
        payload: payload
    }
}
export const removeFromCart = (payload) => {
    return {
        type: 'REMOVE-FROM-CART',
        payload: payload
    }
}