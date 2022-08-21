import { ADD_FROM_CART, DECREASE_FROM_CART } from "./actionTypes";

const initialState = {
    products: [
        {
            id: 1,
            productName: "Asus Vivobook X515MA",
            price: 35000,
            quantity: 20,
        },
        {
            id: 2,
            productName: "Dell E1916HV 18.5 Inch",
            price: 9300,
            quantity: 35,
        },
        {
            id: 3,
            productName: "Canon Eos 4000D 18MP",
            price: 36500,
            quantity: 72,
        }
    ]
}

const productsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_FROM_CART:

            return {
                ...state,
                products: state.products.map((product) => {
                    if (product.id === action.payload.id) {
                        return {
                            ...product,
                            quantity: product.quantity - action.payload.quantity,
                        }
                    } else {
                        return product;
                    }
                }),
            };
        case DECREASE_FROM_CART:

            return {
                ...state,
                products: state.products.map((product) => {
                    if (product.id === action.payload.id) {
                        return {
                            ...product,
                            quantity: product.quantity + action.payload.quantity,
                        }
                    } else {
                        return product;
                    }
                }),
            };

        default:
            return state;
    }

}

export default productsReducer;