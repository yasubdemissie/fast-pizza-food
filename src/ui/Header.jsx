import { Link } from "react-router-dom"

function Header() {
    return (
        <nav>
            <h3>Header <Link to='/'>&rarr;</Link> </h3>
            <p>Yasub Demissie <Link to="/menu" >menu</Link></p>
        </nav>
    )
}

export default Header
