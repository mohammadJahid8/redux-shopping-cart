import { combineReducers } from "redux";
import cartReducer from "./Cart/cartRuducer";
import productsReducer from "./Products/productsReducer";

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
})

export default rootReducer;