import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalOrder, getTotalPrice } from "./CartSlice";

function CartOverview() {
  const cartLength = useSelector(getTotalOrder);
  const totalPrice = useSelector(getTotalPrice);

  if (cartLength === 0) return null;
  return (
    <div className="bg-stone-800 text-stone-200 px-2 py-1 sm:px-6 sm:py-7 sm:pt-4 text-[10px] sm:text-sm flex flex-col sm:flex-row justify-between">
      <p className="space-x-4">
        <span>{cartLength} pizzas</span>
        <span>${totalPrice}</span>
      </p>
      <Link to='/cart' ><span className="lg:text-2xl">🛒</span>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
