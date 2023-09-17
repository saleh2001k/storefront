import { createStore, combineReducers } from "redux";
import { categoryReducer } from "./categories";

const reducers = combineReducers({ categoryReducer })
const store = () => {
    return createStore(reducers)
}

export default store()