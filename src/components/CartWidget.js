import { NavLink } from "react-router-dom"
import {useCart} from './CustomProvider'

const CartWidget = () => {
    const {totalProductos} = useCart()
    return (
        <NavLink to="/carrito">
            <span className="material-icons">shopping_cart</span>
            <span className="notifi">{totalProductos}</span> 
        </NavLink>
    )
}

export default CartWidget