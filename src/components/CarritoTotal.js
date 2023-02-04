import { Button } from 'react-bootstrap';
import {useCart} from './CustomProvider'
import { NavLink } from "react-router-dom"

const CarritoTotal = () => {
    const {totalCarrito} = useCart()

    return (
        <div className="cardtotal">
            <p>TOTAL: {totalCarrito()} $</p>
            <Button size="sm" className='btntotal' variant="light"><NavLink to="/Compra">Continuar compra</NavLink></Button>
        </div>
    )
}

export default CarritoTotal