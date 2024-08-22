import { CartEmpty } from "./Components/CartEmpty";
import { CartList } from "./Components/CartList";
import { useCart } from "../../context";
import useTitle from "../../hooks/useTitle";
export function Cart() {
  useTitle("Cart");
  const { cartList } = useCart();
  return <main>{cartList.length ? <CartList /> : <CartEmpty />}</main>;
}
