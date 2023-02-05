import { useCart } from './CustomProvider';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const {totalProductos} = useCart();
    return (
        <Link to='/carrito'>
            <span className='material-icons'>shopping_cart</span>
            <span className='notifi'>{totalProductos}</span> 
        </Link>
    )
}

export default CartWidget