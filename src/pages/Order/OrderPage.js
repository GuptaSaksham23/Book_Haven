import OrderSuccess from "./Component/OrderSuccess";
import OrderFail from "./Component/OrderFail";
import { useLocation } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

export function OrderPage() {
  const { state } = useLocation();
  useTitle("Order Summary");
  return (
    <main>
      {state.status ? <OrderSuccess data={state.data} /> : <OrderFail />}
    </main>
  );
}
