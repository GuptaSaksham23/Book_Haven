import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducers";
// This is the inital state
const filterInitialState = {
  productList: [],
  onlyInStock: false,
  bestSellerOnly: false,
  sortBy: null,
  ratings: null,
};

const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, filterInitialState);
  // function for initialProductList
  function initialProductList(products) {
    dispatch({
      type: "PRODUCT_LIST",
      payload: {
        product: products,
      },
    });
  }
  //bestSeller filter out
  function bestSeller(products) {
    return state.bestSellerOnly
      ? products.filter((product) => product.best_seller === true)
      : products;
  }
  //inStock filter out
  function inStock(products) {
    return state.onlyInStock
      ? products.filter((product) => product.in_stock === true)
      : products;
  }
  // sorting low to high and High to low
  function sort(products) {
    if (state.sortBy === "lowtohigh") {
      return products.sort((a, b) => Number(a.price) - Number(b.price));
    }
    if (state.sortBy === "hightolow") {
      return products.sort((a, b) => Number(b.price) - Number(a.price));
    } else {
      return products;
    }
  }
  function rating(products) {
    if (state.ratings === "4STARTABOVE") {
      return products.filter((product) => product.rating >= 4);
    }
    if (state.ratings === "3STARTABOVE") {
      return products.filter((product) => product.rating >= 3);
    }
    if (state.ratings === "2STARTABOVE") {
      return products.filter((product) => product.rating >= 2);
    }
    if (state.ratings === "1STARTABOVE") {
      return products.filter((product) => product.rating >= 1);
    }
    return products;
  }
  const filterProductList = rating(
    sort(inStock(bestSeller(state.productList)))
  );
  const value = {
    productList: filterProductList,
    initialProductList,
    state,
    dispatch,
  };
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
