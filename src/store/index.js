import { createStore, combineReducers, applyMiddleware } from "redux";
import { categoryReducer } from "./categories";
import { cartReducer } from "./cartReducer";
import thunk from "redux-thunk";


const reducers = combineReducers({ categoryReducer,cartReducer })
const store = () => {
    return createStore(reducers,applyMiddleware(thunk))
}

export default store()