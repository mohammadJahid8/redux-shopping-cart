import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import productsReducer from "./Products/productsReducer";
import rootReducer from "./rootReducer";


const store = createStore(rootReducer)

export default store;