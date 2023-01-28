import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    
    const [load, setLoad] = useState(false)
    const [producto,setProductos] = useState([])

    const props = useParams();
    let url= "https://fakestoreapi.com/products"
    
    useEffect(() => {
        if(props.id!==undefined){
            url=url+"/"+props.id   
        }

        const pedido = fetch(url)

        pedido
            .then((respuesta) => {
                const producto = respuesta.json()
                return producto

            })
            .then((producto) => {
                setProductos(producto)
                setLoad(true)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [props.id])

    return (
        <div >
            {load ? "" : 'Cargando...'}
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer