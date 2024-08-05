import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOveriew from "../features/cart/CartOverview";
import Loading from "./Loading";

function AppLayout() {
  const navigate = useNavigation();
  const isLoading = navigate.state === "loading";
  return (
    <div className="layout">
      <>
        <Header />
        {isLoading ? <Loading /> : <Outlet />}
        <CartOveriew />
      </>
    </div>
  );
}

export default AppLayout;
