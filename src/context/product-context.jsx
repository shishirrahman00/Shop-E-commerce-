import { createContext, useReducer } from "react";
import { ProductReducer } from "../reducer/product-reducer.js";

const ProductContext = createContext();
const initialState = {
  cart: [],
};
export function ProductContextPovider({ children }) {
  const [state, dispatch] = useReducer(ProductReducer, initialState);
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}

export { ProductContext };
