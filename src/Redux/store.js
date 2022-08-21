import { createStore } from "redux";
import productsReducer from "./Products/productsReducer";


const store = createStore(productsReducer)

export default store;