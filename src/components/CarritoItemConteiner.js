import CarritoItem from './CarritoItem'
import {useCart} from './CustomProvider'

const CarritoItemContainer = () => {
    const {carrito, modificarCantidad, eliminarProducto} = useCart()
    
    const handleModificarCantidad = (id, cantidad) => {
        modificarCantidad(id, cantidad)
    }

    const handleEliminar = (id) => {
        eliminarProducto(id)
    }
    
    return (
        <div>
            {carrito.map((producto) => {
                return (
                    <CarritoItem producto={producto} key={producto.id} onModificarCantidad={handleModificarCantidad} onEliminarProducto={handleEliminar}/>
                )
            })}
        </div>
    )
}

export default CarritoItemContainer