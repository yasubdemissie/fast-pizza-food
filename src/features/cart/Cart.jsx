import { Link } from 'react-router-dom';
import Button from '../../ui/Button';
import LinkButton from '../../ui/LinkButton';
import CartItem from './CartItem';

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div className="px-2">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-4 text-xs sm:text-base">Your cart, %NAME%</h2>

      <ul className="my-4 divide-y-2 divide-stone-200 border border-stone-200">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div className="sm:m-4 flex items-center justify-between">
        <Button type="small" to="/order/new">Order pizzas</Button>
        <button className="rounded-full border border-stone-20 text-[8px] sm:text-base px-2 py-1 sm:px-3 sm:py-2 hover:bg-red-100 font-semibold">
          Clear cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
