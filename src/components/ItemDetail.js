import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Item = ({ producto }) => {
    return (
        <article className="card-detail">
            <div className="container">
                <div className="image-column">
                    <img className="image-column" src={producto.image} alt={producto.title}/>
                </div>
                <div className="content-column">
                    <div>
                        <div className="title">{producto.title}</div>
                        <div className="description">{producto.description}</div>
                        <div className="price">Precio: {producto.price}$</div>
                    </div>
                    <div>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Cantidad: </InputGroup.Text>
                            <Button size="lg">-</Button>
                            <Form.Control/>
                            <Button>+</Button>
                        </InputGroup>
                    </div>

                </div>
                
            </div>
        </article>
    )
}

export default Item

