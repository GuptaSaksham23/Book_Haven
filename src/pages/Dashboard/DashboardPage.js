import { useState, useEffect } from "react";
import { DashboardCard } from "../index";
import { DashboardEmpty } from "../index";
import { getUserOrders } from "../../services";
import { toast } from "react-toastify";
import useTitle from "../../hooks/useTitle";
export const DashboardPage = () => {
  useTitle("Dashboard");
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const data = await getUserOrders();

        setOrders(data);
      } catch (error) {
        toast.error(error.message, {
          closeButton: true,
          position: "bottom-center",
        });
      }
    }
    fetchOrders();
  }, []);
  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          My Dashboard
        </p>
      </section>
      <section>
        {orders.length &&
          orders.map((order) => {
            return <DashboardCard key={order.id} order={order} />;
          })}
      </section>
      <section>{orders.length === 0 && <DashboardEmpty />}</section>
    </main>
  );
};
