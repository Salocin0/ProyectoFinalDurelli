import CarritoForm from "./CarritoForm"
import CarritoItemContainer from "./CarritoItemConteiner"
import CarritoTotal from "./CarritoTotal"

const Carrito = () => {
    return (
        <div className="containercarrito">
            <CarritoItemContainer/>
            <CarritoTotal/>
        </div>
    )
}

export default Carrito