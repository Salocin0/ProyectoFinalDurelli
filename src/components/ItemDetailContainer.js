import { useEffect, useState } from "react"
import { collection , getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { ToastContainer, toast } from 'react-toastify';

const ItemDetailContainer = () => {
    
    const [load, setLoad] = useState(false)
    const [producto,setProducto] = useState([])

    const props = useParams();
        
    useEffect(() => {
        const queryIdProducto = query(collection(db, "Productos"),where("__name__","==",props.id))
        const pedidoFirestore = getDocs(queryIdProducto)

        toast.promise(pedidoFirestore, { 
            pending: "Cargando producto", 
            success: "Producto cargado", 
            error: "Error al cargar el producto"
        })

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
            {load ? <ItemDetail producto={producto} />  : null }
        </div>
    )
}

export default ItemDetailContainer