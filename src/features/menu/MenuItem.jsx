import { useNavigation } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import propTypes from "prop-types";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex space-x-2 pt-2">
      <img className={`h-24 ${soldOut ? "grayscale" : ""}`} src={imageUrl} alt={name} />
      <div className="flex grow flex-col">
        <p className="font-medium uppercase">{name}</p>
        <p className="capitalize italic text-sm">{ingredients.join(", ")}</p>
        <div className="mt-4 text-slate-500 flex justify-between">
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
          <Button type="small">add to cart</Button>
        </div>
      </div>
    </li>
  );
}

MenuItem.propTypes = {
  pizza: propTypes.object,
};

export default MenuItem;
