import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import propTypes from 'prop-types';
import DeleteItem from './DeleteItem';
import UpdateItemQuantity from './UpdateItemQuantity';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-1 text-[9px] sm:space-y-2 sm:py-3 sm:text-lg">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between">
        <p>{formatCurrency(totalPrice)}</p>
        <div className='flex gp-3'>
          <UpdateItemQuantity id={pizzaId}>{quantity}</UpdateItemQuantity>
          <DeleteItem id={pizzaId} />
        </div>
      </div>
    </li>
  );
}

CartItem.propTypes = {
  item: propTypes.object,
};

export default CartItem;
