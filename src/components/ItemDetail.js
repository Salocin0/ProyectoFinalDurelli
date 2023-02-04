import ItemCount from './ItemCount';
import {useCart} from './CustomProvider'

const Item = ({ producto }) => {
    
    const onAdd = (parametro) => {
        setTotalProductos(totalProductos+parametro)
    }
    
    const {totalProductos,setTotalProductos} = useCart()

    return (
        <article className="card-detail">
            <div className="container">
                <div className="image-column">
                    <img className="image-column" src={"/img/Products/"+producto.title+".jpg"} alt={producto.title}/>
                </div>
                <div className="content-column">
                    <div>
                        <div className="title">{producto.title}</div>
                        <div className="description">{producto.description}</div>
                        <div className="price">Precio: {producto.price}$</div>
                        <ItemCount onAdd={onAdd} producto={producto}/>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Item