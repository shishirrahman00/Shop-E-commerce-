import { ADD_TO_CART, GET_PRODUCTS } from "../actions/action.js";
export const ProductReducer = (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_TO_CART:
      if (
        state.cart.find((product) => {
          return product.id === action.payload.id;
        })
      ) {
        return {
          ...state,
          cart: state.cart.map((product) => {
            return product.id === action.payload.id
              ? {
                  ...product,
                  quantity: product.quantity + action.payload.quantity,
                }
              : product;
          }),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }

    default:
      return state;
  }
};
