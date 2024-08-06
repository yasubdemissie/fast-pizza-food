import { Outlet, useNavigation } from 'react-router-dom';
import Header from './Header';
import CartOveriew from '../features/cart/CartOverview';
import Loading from './Loading';

function AppLayout() {
  const navigate = useNavigation();
  const isLoading = navigate.state === 'loading';
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <>
        <Header />
        <div className="overflow-y-auto overflow-x-hidden">
          <main className="mx-auto max-w-3xl my-8">
            {isLoading ? <Loading /> : <Outlet />}
          </main>
        </div>
        <CartOveriew />
      </>
    </div>
  );
}

export default AppLayout;
