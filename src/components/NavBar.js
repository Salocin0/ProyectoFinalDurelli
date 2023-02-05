import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = (props) => {

const { isHeader, textLinkFooter, hrefLinkFooter } = props
    
if (isHeader) {
    return (
        <nav className='header__navbar'>
            <Link className='header__link' to='/productos/menclothing'>Ropa de Hombre</Link>
            <Link className='header__link' to='/productos/womenclothing'>Ropa de mujer</Link>
            <Link className='header__link' to='/productos/electronics'>Electronica</Link>
            <Link className='header__link' to='/productos/jewelery'>Joyeria</Link>
            <CartWidget/>
        </nav>
    )
} else {
    return (
        <nav className='header__navbar'>
            <a href={hrefLinkFooter}>{textLinkFooter}</a>
        </nav>
        )
    }
}

export default NavBar