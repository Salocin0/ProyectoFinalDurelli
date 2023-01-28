import Item from "./Item"

const ItemList = ({productos}) => {
    return (
       
        <div className="item-container">
            {productos.map((producto) => {
                return (
                    <Item producto={producto} key={producto.id}/>
                )
            })}
        </div>
    )
}

export default ItemList