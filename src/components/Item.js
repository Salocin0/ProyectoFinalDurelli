import { Link } from "react-router-dom"

const Item = ({ producto }) => {
    return (
        <Link to={"/item/"+producto.id}>
            <article key={producto.id} className="card">
                <img className="card-image" src={producto.image} alt={producto.title}/>
                    <div className="card-text">
                        <h1>{producto.title}</h1>
                    </div>
                <div className="card-stats">
                    <div className="text">Precio: {producto.price}$</div>
                </div>
            </article>
        </Link>
        
    )
}

export default Item

