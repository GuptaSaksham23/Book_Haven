// fliter reducer which have state and action

export const filterReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    //function initialProductList
    case "PRODUCT_LIST":
      return { productList: payload.product };
    case "SORT_BY":
      return { ...state, sortBy: payload.sortBy };
    case "RATINGS":
      return { ...state, ratings: payload.ratings };
    case "BEST_SELLER_ONLY":
      return { ...state, bestSellerOnly: payload.bestSellerOnly };

    case "ONLY_IN_STOCK":
      return { ...state, onlyInStock: payload.onlyInStock };
    case "CLEAR_FILTER":
      return {
        ...state,
        onlyInStock: payload.onlyInStock,
        bestSellerOnly: payload.bestSellerOnly,
        sortBy: payload.sortBy,
        ratings: payload.ratings,
      };
    default:
      throw new Error("NO case found");
  }
};
