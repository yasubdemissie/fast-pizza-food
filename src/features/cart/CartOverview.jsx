import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartOverview() {
  const cartLength = useSelector(state => state.cartReducer.cart.length);
  const totalPrice = useSelector(state => state.cartReducer.cart.reduce((sum, item) => sum + item.totalPrice, 0));

  if (cartLength === 0) return null;
  return (
    <div className="bg-stone-800 text-stone-200 px-2 py-1 sm:px-6 sm:py-7 sm:pt-4 text-[10px] sm:text-sm flex flex-col sm:flex-row justify-between">
      <p className="space-x-4">
        <span>{cartLength} pizzas</span>
        <span>${totalPrice}</span>
      </p>
      <Link to='/cart' >Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
