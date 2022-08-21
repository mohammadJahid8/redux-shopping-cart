import { INCREASE_QUANTITY, DECREASE_QUANTITY, ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";


const initialState = {
    totalProducts: 0,
    cart: [

    ]
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload],
                totalProducts: state.totalProducts ? state.totalProducts + 1 : 1,
            };
        case INCREASE_QUANTITY:
            return {
                ...state,
                cart: state.cart.map((product) => {
                    if (product.id === action.payload.id) {
                        return {
                            ...product,
                            quantity: product?.quantity ? product.quantity + 1 : 1,
                        }
                    } else {
                        return product;
                    }
                }),
                totalProducts: state?.totalProducts ? state.totalProducts + 1 : 1,
            };
        case DECREASE_QUANTITY:
            return {
                ...state,
                cart: state.cart.map((product) => {
                    if (product.id === action.payload.id) {
                        return {
                            ...product,
                            quantity: product.quantity - 1,
                        }
                    } else {
                        return product;
                    }
                }),
                totalProducts: state?.totalProducts - 1,
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((product) => product.id !== action.payload.id),
                totalProducts: state?.totalProducts - 1,
            };

        default:
            return state;
    }

}

export default cartReducer;