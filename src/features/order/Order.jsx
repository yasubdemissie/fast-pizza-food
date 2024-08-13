// Test ID: IIDSAT
import OrderItem from "./OrderItem";
import { useLoaderData } from "react-router-dom";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import { useDispatch } from "react-redux";
import { clearCart } from "../cart/CartSlice";

function Order() {
  const order = useLoaderData();
  const dispatch = useDispatch();
  dispatch(clearCart());
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    orderPrice,
    priorityPrice,
    estimatedDelivery,
    cart,
  } = order;
  console.log(priority);
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="space-y-5 m-3">
      <div className="flex gap-4 flex-wrap justify-between">
        <h2 className="font-xs text-xs sm:text-lg sm:font-bold">Order ID: <span className="italic underline">{id}</span> Status</h2>

        <div className="space-x-2 text-[10px] sm:text-base lg:text-xl">
          {priority && <span className="bg-red-500 px-3 py-1 rounded-full text-red-50">Priority</span>}
          <span className="bg-green-500 px-3 py-1 rounded-full text-green-50">{status} order</span>
        </div>
      </div>

      <div className="flex gap-4 flex-wrap justify-between bg-stone-200 py-2 px-4 rounded-md">
        <p className="font text-xs sm:text-base lg:text-xl">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="font-medium text-xs sm:text-base lg:text-xl">(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <ul className="divide-y mx-2 my-5 divide-stone-400 border-b border-t space-y-1">
        {cart.map(item => <OrderItem item={item} key={item.id} />)}
      </ul>

      <div className="bg-stone-200 py-2 px-4 rounded-md space-y-5 text-xs sm:text-base lg:text-xl">
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="font-bold">To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

export default Order;
