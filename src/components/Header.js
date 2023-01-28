import { NavLink } from "react-router-dom"
import NavBar from "./NavBar"

const Header = () => {
    const isHeader = true

    return (
        <header className="header">
            <NavLink to="/">
                <h1 className="header__title" align="left">Store</h1> 
            </NavLink>
            <NavBar isHeader={isHeader}/>
        </header>
    )
}

export default Header