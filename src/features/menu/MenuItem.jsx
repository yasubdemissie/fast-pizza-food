import { useNavigation } from 'react-router-dom';
import { formatCurrency } from '../../utils/helpers';
import Button from '../../ui/Button';
import propTypes from 'prop-types';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex space-x-2 pt-2 text-[8px] sm:text-base transition-all duration-500 hover:scale-105 hover:bg-yellow-50">
      <img
        className={`h-14 my-auto sm:h-24 ${soldOut ? 'grayscale' : ''}`}
        src={imageUrl}
        alt={name}
      />
      <div className="flex grow flex-col">
        <p className="font-medium uppercase">{name}</p>
        <p className="capitalize italic sm:text-sm">{ingredients.join(', ')}</p>
        <div className="mt-0 flex justify-between text-slate-500">
          {!soldOut ? <p className='mt-3'>{formatCurrency(unitPrice)}</p> : <p className='mt-2'>Sold out</p>}
          <Button type="small">add</Button>
        </div>
      </div>
    </li>
  );
}

MenuItem.propTypes = {
  pizza: propTypes.object,
};

export default MenuItem;
