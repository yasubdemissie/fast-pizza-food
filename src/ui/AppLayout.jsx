import { Outlet } from "react-router-dom"
import Header from "./Header"
import CartOveriew from "../features/cart/CartOverview";

function AppLayout() {
    return (
        <div>
            <Header />
            <Outlet />
            <CartOveriew />
        </div>
    )
}

export default AppLayout
