import ActionType from "../constant/ActionType";

const initialState = {
    products: [],
};
export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionType.SET_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    };
}
//export default productReducer;

export const selectedProductReducer = (state = {}, { type, payload }) => {
console.log(type);
    switch (type) {
        case ActionType.SELECTED_PRODUCT:
            return { ...state, ...payload };
            case ActionType.REMOVE_SELECTED_PRODUCT:
                return {};
        default:
            return state;
    }
}


// export const selectedProductReducer = (state = {}, { type, payload }) => {
//     console.log(type);
//     switch (type) {
//       case ActionType.SELECTED_PRODUCT:
//         return { ...state, ...payload };
//       case ActionType.REMOVE_SELECTED_PRODUCT:
//         return {};
//       default:
//         return state;
//     }
//   };