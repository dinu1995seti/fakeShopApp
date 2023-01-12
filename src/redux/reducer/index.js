import {combineReducers} from "redux";
import {productReducer, selectedProductReducer} from "./productReducer";

const  Reducer = combineReducers({

    allProducts:productReducer,
    product:selectedProductReducer,
});

export default Reducer;