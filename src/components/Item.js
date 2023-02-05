import { Button, ButtonGroup, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useCart } from './CustomProvider';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
    const {agregarProducto} = useCart()

    const handleConfirmar = () => {
        agregarProducto(producto,1)
    }
    
    return (
        <article key={producto.id} className='card'>
            <img className='card-image' src={'/img/Products/'+producto.title+'.jpg'} alt={producto.title}/>
            <div className='card-text'>
                <p className='card-text'>{producto.title}</p>
            </div>
            <div>
                <ButtonGroup className='small-component'>
                    <Button variant='success' onClick={handleConfirmar}><FontAwesomeIcon icon={faCartPlus}/></Button>                        
                    <InputGroup.Text className='text' size='sm'>{producto.price}$</InputGroup.Text>
                    <Link to={'/item/'+producto.id}>
                        <Button variant='primary'>Ver</Button>
                    </Link>
                </ButtonGroup>
            </div>
        </article>
    )
}

export default Item