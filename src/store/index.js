import  {combineReducers}  from "redux";
import  categoryReducer  from "./categories";
import cartReducer  from "./cartReducer";
//import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";


const reducer = combineReducers({ categoryReducer, cartReducer })
const store = () => {
    return configureStore({ reducer });
}

export default store()