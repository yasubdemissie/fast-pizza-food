// import { getMenu } from "../../services/apiRestaurant";
import MenuItem from './MenuItem';

import { useLoaderData } from 'react-router-dom';

function Menu() {
  const menu = useLoaderData();
  // console.log(menu);
  return (
    <>
      <h1>Menu</h1>
      <ul className="divide-y divide-stone-200 px-2" >
        {menu.map((pizza) => (
          <MenuItem key={pizza.id} pizza={pizza} />
        ))}
      </ul>
    </>
  );
}

export default Menu;
