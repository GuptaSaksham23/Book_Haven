import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers";
const cartInitialState = {
  cartList: [],
  total: 0,
};

const CartContext = createContext(cartInitialState);

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (product) => {
    let updatedList = state.cartList.concat(product);
    let updatedTotal = state.total + product.price;
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        product: updatedList,
        total: updatedTotal,
      },
    });
  };
  const removeFromCart = (product) => {
    let updatedList = state.cartList.filter((products) => {
      return product.id !== products.id;
    });
    let updatedTotal = state.total - product.price;
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        product: updatedList,
        total: updatedTotal,
      },
    });
  };
  function clearCart() {
    dispatch({
      type: "CLEAR_CART",
      payload: {
        products: [],
        total: 0,
      },
    });
  }
  const value = {
    cartList: state.cartList,
    total: state.total,
    addToCart,
    removeFromCart,
    clearCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
