import { useCart } from './CustomProvider';
import CarritoItem from './CarritoItem';

const CarritoItemContainer = () => {
    const {carrito, modificarCantidad, eliminarProducto} = useCart();
    
    const handleModificarCantidad = (id, cantidad) => {
        modificarCantidad(id, cantidad);
    }

    const handleEliminar = (id) => {
        eliminarProducto(id);
    }
    
    return (
        <div className='cartentymsg'>
            {carrito.length === 0 ? (
                <h2>No hay productos en tu carrito</h2>
                ) : (
                    carrito.map((producto) => {
                    return (
                        <CarritoItem
                            producto={producto}
                            key={producto.id}
                            onModificarCantidad={handleModificarCantidad}
                            onEliminarProducto={handleEliminar}
                        />
                    );
                })
            )}
        </div>
    )
}

export default CarritoItemContainer