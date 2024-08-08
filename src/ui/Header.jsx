import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import UserName from '../features/user/UserName';

function Header() {
  return (
    <nav className="grid bg-yellow-500 p-2 sm:p-4 sm:flex sm:justify-between">
      <h3 className="text-center text-xs sm:text-base font-semibold uppercase tracking-widest text-yellow-200">
        Fast Food eth <Link to="/">&rarr;</Link>{' '}
      </h3>
      <SearchOrder />
      <UserName />
      {/* <Link to="/menu">menu</Link> */}
    </nav>
  );
}

export default Header;
