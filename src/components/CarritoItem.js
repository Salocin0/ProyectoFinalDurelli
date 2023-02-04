import { Button, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash,faPlus,faMinus,faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CarritoItem = ({ producto, onModificarCantidad, onEliminarProducto }) => {

    const handleModificarCantidad = (id, cantidad) => {
        onModificarCantidad(id, cantidad)
    }

    const handleEleminiar = (id) => {
        onEliminarProducto(id)
    }

    return (
        <article key={producto.id} >
            <div className="cardcarrito">
            <div className="imgcontcarrito">
                <img className="cardcarrito-image" src={"/img/Products/"+producto.title+".jpg"} alt={producto.title}/>
            </div>
            <div className="cardcarrito-text">
                <h1>{producto.title}</h1>
            </div>
            <div className="statscontcarrito">
                <div className="cardcarrito-stats">Precio: {producto.price}$ X {producto.cantidad}<FontAwesomeIcon icon={faArrowRight} />Subtotal: {producto.price * producto.cantidad}$</div>
                <div className='btncarrito'>
                <ButtonGroup>
                    <Button variant="success" size="sm" onClick={() => handleModificarCantidad(producto.id,producto.cantidad-1)} disabled={producto.cantidad===1}><FontAwesomeIcon icon={faMinus} /></Button>
                    <Button variant="success" size="sm" onClick={() => handleModificarCantidad(producto.id,producto.cantidad+1)} disabled={producto.cantidad===producto.stock}><FontAwesomeIcon icon={faPlus} /></Button>
                </ButtonGroup>
                    <Button variant="danger" size="sm" onClick={() => handleEleminiar(producto.id)}><FontAwesomeIcon icon={faTrash} /></Button>
                </div>
            </div>
            </div>
            
        </article>
    )
}

export default CarritoItem