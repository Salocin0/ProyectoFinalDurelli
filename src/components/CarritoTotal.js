import { useCart } from './CustomProvider';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CarritoTotal = () => {
    const {totalCarrito} = useCart();

    return (
        <div className='cardtotal'>
            <p className='txttotal'>Total: {totalCarrito()} $</p>
            <Link to='/Compra'>
                <Button size='sm' className='btntotal' variant='light'>Continuar compra</Button>
            </Link>
        </div>
    )
}

export default CarritoTotal