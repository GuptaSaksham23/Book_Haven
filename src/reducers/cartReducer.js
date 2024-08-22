export function cartReducer(state, action) {
  let { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      return { ...state, cartList: payload.product, total: payload.total };
    case "REMOVE_FROM_CART":
      return { ...state, cartList: payload.product, total: payload.total };

    case "CLEAR_CART":
      return { ...state, cartList: [], total: 0 };

    default:
      throw new Error("NO CASE FOUND");
  }
}
