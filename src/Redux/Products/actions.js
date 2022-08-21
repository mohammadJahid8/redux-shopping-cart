import { ADD_FROM_CART, DECREASE_FROM_CART } from "./actionTypes";


export const addFromCart = (id, quantity) => {
    return {
        type: ADD_FROM_CART,
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

