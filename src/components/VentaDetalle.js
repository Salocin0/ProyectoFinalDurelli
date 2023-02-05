import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { collection , getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase"
import { ToastContainer, toast } from 'react-toastify';

const Carrito = () => {
    const [venta,setVenta] = useState([])

    const props = useParams();

    useEffect(() => {
        const queryIdVenta = query(collection(db, "Ventas"),where("__name__","==",props.id))
        const pedidoFirestore = getDocs(queryIdVenta)

        toast.promise(pedidoFirestore, { 
            pending: "Cargando Venta", 
            success: "Venta cargada", 
            error: "Error al cargar la venta"
        })

        pedidoFirestore
            .then((respuesta)=>{
                const vent = {id: props.id , ...respuesta.docs[0].data()}
                setVenta(vent)
            })
            .catch((error)=>{
                console.log(error)
            })
    }, [props.id])

    return (
        <div className="containercarrito">
            <p>{venta.id}</p>
        </div>
    )
}

export default Carrito