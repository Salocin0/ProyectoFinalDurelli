import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"

const ItemListContainer = () => {

    const [load, setLoad] = useState(false)
    const [productos,setProductos] = useState([])

    const props = useParams();
    let url= "https://fakestoreapi.com/products"
    
    useEffect(() => {
        if(props.categoria!==undefined){
            url=url+"/category/"+props.categoria   
        }

        const pedido = fetch(url)

        pedido
            .then((respuesta) => {
                const productos = respuesta.json()
                return productos

            })
            .then((productos) => {
                setProductos(productos)
                setLoad(true)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [props.categoria])

    return (
        <div >
            {load ? "" : 'Cargando...'}
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer