import { NavLink } from "react-router-dom"


const CartWidget = () => {

    return (
            <NavLink to="/carrito">
                <span className="material-icons">shopping_cart</span>
                <span className="notifi">1</span> 
            </NavLink>
    )
}

export default CartWidget