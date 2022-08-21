import { INCREASE_QUANTITY, DECREASE_QUANTITY, ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

export const increaseQuantity = (id, quantity) => {
    return {
        type: INCREASE_QUANTITY,
        payload: {
            id,
            quantity
        }
    }
}

export const decreaseQuantity = (id, quantity) => {
    return {
        type: DECREASE_QUANTITY,
        payload: {
            id,
            quantity
        }
    }
}

export const addToCart = (id, name, price) => {
    return {
        type: ADD_TO_CART,
        payload: {
            id,
            name,
            price,
            quantity: 1
        }
    }
}

export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        payload: {
            id,
        }
    }

}