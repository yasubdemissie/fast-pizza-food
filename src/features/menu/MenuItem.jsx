import { formatCurrency } from "../../utils/helpers";
import propTypes from "prop-types";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
}

MenuItem.propTypes = {
  id: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  unitPrice: propTypes.number,
  ingredients: propTypes.arrayOf(propTypes.string),
  soldOut: propTypes.bool,
  imageUrl: propTypes.string,
};

export default MenuItem;
