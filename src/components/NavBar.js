import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"

const NavBar = (props) => {

const { isHeader, textLinkFooter, hrefLinkFooter } = props
    
if (isHeader) {
    return (
        <nav className="header__navbar">
            <NavLink className="header__link" to="/productos/menclothing">Ropa de Hombre</NavLink>
            <NavLink className="header__link" to="/productos/womenclothing">Ropa de mujer</NavLink>
            <NavLink className="header__link" to="/productos/electronics">Electronica</NavLink>
            <NavLink className="header__link" to="/productos/jewelery">Joyeria</NavLink>
            <CartWidget/>
        </nav>
    )
} else {
    return (
        <nav className="header__navbar">
            <a href={hrefLinkFooter}>{textLinkFooter}</a>
        </nav>
        )
    }
}

export default NavBar