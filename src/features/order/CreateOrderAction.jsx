import { redirect } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

export async function CreateOrderAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const error = {};

  const order = {
    ...data,
    priority: data.priority === "on",
    cart: JSON.parse(data.cart),
  };

  if (!isValidPhone(order.phone)) {
    error.phone =
      "Please enter a valid phone number. " + order.phone + " is not a valid";
  }
  if (Object.keys(error).length > 0) {
    return error;
  }

  const newOrder = await createOrder(order);
  return redirect(`/order/${newOrder.id}`);
}
