import { Link } from 'react-router-dom';
import Button from '../../ui/Button';
import LinkButton from '../../ui/LinkButton';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from './CartSlice';
import EmptyCart from "./EmptyCart";

function Cart() {
  const cart = useSelector((state) => state.cartReducer.cart);
  const Name = useSelector((state) => state.userReducer.userName);
  const dispatch = useDispatch();

  function handleClear() {
    dispatch(clearCart());
  }

  if (cart.length === 0) return <EmptyCart />

  return (
    <div className="px-2">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-4 text-xs sm:text-base">Your cart, {Name}</h2>

      <ul className="my-4 divide-y-2 divide-stone-200 border border-stone-200">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div className="flex items-center justify-between sm:m-4">
        <Button type="small" to="/order/new">
          Order pizzas
        </Button>
        <button
          onClick={handleClear}
          className="border-stone-20 rounded-full border px-2 py-1 text-[8px] font-semibold hover:bg-red-100 sm:px-3 sm:py-2 sm:text-base"
        >
          Clear cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
