import { useNavigation } from 'react-router-dom';
import { formatCurrency } from '../../utils/helpers';
import Button from '../../ui/Button';
import DeleteItem from '../cart/DeleteItem';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getItemById } from '../cart/CartSlice';

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const data = useSelector(getItemById(id));

  function handleAddItem({ id: pizzaId, name, unitPrice }) {
    dispatch(
      addItem({ pizzaId, name, unitPrice, quantity: 1, totalPrice: unitPrice }),
    );
  }

  return (
    <li className="flex border rounded-lg mb-3 space-x-2 text-[8px] transition-all duration-500 hover:scale-[1.02] hover:bg-yellow-50 sm:text-base">
      <img
        className={`my-auto rounded-lg h-14 sm:h-24 ${soldOut ? 'grayscale' : ''}`}
        src={imageUrl}
        alt={name}
      />
      <div className="flex grow flex-col">
        <p className="font-medium uppercase">{name}</p>
        <p className="capitalize italic sm:text-sm">{ingredients.join(', ')}</p>
        <div className="mt-0 flex justify-between text-slate-500">
          {!soldOut ? (
            <p className="mt-3">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="mt-2">Sold out</p>
          )}
          {!soldOut && data > 0 ? (
            <DeleteItem id={id} />
          ) : (!soldOut &&
            <Button type="small" item={pizza} task={handleAddItem}>
              add
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

MenuItem.propTypes = {
  pizza: propTypes.object,
};

export default MenuItem;
