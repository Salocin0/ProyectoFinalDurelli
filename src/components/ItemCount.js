import { faPlus,faMinus } from '@fortawesome/free-solid-svg-icons';
import { Button, ButtonGroup, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCart } from './CustomProvider';
import { useState } from 'react';

const ItemCount = ({ onAdd, producto }) => {

  const [contador, setContador] = useState(1);

  const {agregarProducto} = useCart();

  const handleSumar = () => {
    setContador(contador + 1);
  }

  const handleRestar = () => {
    setContador(contador - 1);   
  }

  const handleConfirmar = () => {
    onAdd(contador);
    agregarProducto(producto,contador);
  }

  return (
    <div className='contador'>
      <ButtonGroup>
        <Button variant='success' size='sm' onClick={handleRestar} disabled={contador===1}><FontAwesomeIcon icon={faMinus}/></Button>
        <InputGroup.Text size='sm'>Cantidad: {contador}</InputGroup.Text>
        <Button variant='success' size='sm' onClick={handleSumar} disabled={contador===producto.stock}><FontAwesomeIcon icon={faPlus}/></Button>
        <Button size='sm' onClick={handleConfirmar}>Agregar a Carrito</Button>
      </ButtonGroup>
    </div>
  )
}

export default ItemCount