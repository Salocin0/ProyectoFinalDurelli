import { Button, ButtonGroup } from 'react-bootstrap';
import { useState } from "react"
import {useCart} from './CustomProvider'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash,faPlus,faMinus,faArrowRight } from "@fortawesome/free-solid-svg-icons";
import InputGroup from 'react-bootstrap/InputGroup';

const ItemCount = ({ onAdd, producto }) => {

  const [contador, setContador] = useState(1)

  const {agregarProducto} = useCart()

  const handleSumar = () => {
    setContador(contador + 1)
  }

  const handleRestar = () => {
    setContador(contador - 1)    
  }

  const handleConfirmar = () => {
    onAdd(contador)
    agregarProducto(producto,contador)
  }

  return (
    <div className="contador">
      <ButtonGroup>
      <Button variant="success" size="sm" onClick={handleRestar} disabled={contador===1}><FontAwesomeIcon icon={faMinus} /></Button>
      <InputGroup.Text size="sm" >Cantidad: {contador}</InputGroup.Text>
      <Button variant="success" size="sm" onClick={handleSumar} disabled={contador===producto.stock}><FontAwesomeIcon icon={faPlus} /></Button>
      <Button size="sm" onClick={handleConfirmar}>Agregar a Carrito</Button>
      </ButtonGroup>
    </div>
  )
}

export default ItemCount