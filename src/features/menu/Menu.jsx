// import { getMenu } from "../../services/apiRestaurant";
import MenuItem from './MenuItem';

import { useLoaderData } from 'react-router-dom';

function Menu() {
  const menu = useLoaderData();
  // console.log(menu);
  return (
    <>
      <h1 className='font-medium mx-2'>Menu</h1>
      <ul className="px-4" >
        {menu.map((pizza) => (
          <MenuItem key={pizza.id} pizza={pizza} />
        ))}
      </ul>
    </>
  );
}

export default Menu;
