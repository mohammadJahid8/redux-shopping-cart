import { ADD_TO_CART, DECREASE_FROM_CART } from "./actionTypes";


export const addToCart = (id, quantity) => {
    return {
        type: ADD_TO_CART,
        payload: {
            id,
            quantity,
        }
    }
}
export const decreaseFromCart = (id, quantity) => {
    return {
        type: DECREASE_FROM_CART,
        payload: {
            id,
            quantity,
        }
    }
}

