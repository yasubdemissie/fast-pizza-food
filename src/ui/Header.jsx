import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"

function Header() {
    return (
        <nav>
            <h3>Header <Link to='/'>&rarr;</Link> </h3>
            <SearchOrder />
            <p>Yasub Demissie <Link to="/menu" >menu</Link></p>

        </nav>
    )
}

export default Header
