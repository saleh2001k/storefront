import { createStore, combineReducers } from "redux";
import { categoryReducer } from "./categories";
import { cartReducer } from "./cartReducer";


const reducers = combineReducers({ categoryReducer,cartReducer })
const store = () => {
    return createStore(reducers)
}

export default store()