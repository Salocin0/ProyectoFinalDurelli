import { useEffect, useState } from "react"
import { collection , getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    
    const [load, setLoad] = useState(false)
    const [producto,setProducto] = useState([])

    const props = useParams();
        
    useEffect(() => {
        const queryIdProducto = query(collection(db, "Productos"),where("__name__","==",props.id))
        const pedidoFirestore = getDocs(queryIdProducto)

        pedidoFirestore
            .then((respuesta)=>{
                const prod = {id: props.id , ...respuesta.docs[0].data()}
                setProducto(prod)
            })
            .catch((error)=>{
                console.log(error)
            })
    }, [props.id])

    useEffect(() => {
        setLoad(true)
      }, [producto])

    return (
        <div >
            {load ? <ItemDetail producto={producto} />  : 'Cargando...' }
        </div>
    )
}

export default ItemDetailContainer