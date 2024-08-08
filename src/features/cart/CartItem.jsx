import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className=" py-1 sm:py-3 sm:space-y-2 text-[9px] sm:text-lg">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between">
        <p>{formatCurrency(totalPrice)}</p>
        <Button type="small">delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
