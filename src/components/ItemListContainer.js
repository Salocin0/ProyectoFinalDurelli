import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import { ToastContainer, toast } from 'react-toastify';

const ItemListContainer = () => {

    const [load, setLoad] = useState(false)
    const [productos,setProductos] = useState([])

    const props = useParams();

    useEffect(() => {
        var productosCollection=null
        if(props.categoria!==undefined){
            productosCollection = query(collection(db,"Productos"),where("category","==",props.categoria))
        }else{
            productosCollection = collection(db,"Productos")
        }
        const pedidoFirestore = getDocs(productosCollection)
        const productosfire=[]
        
        toast.promise(pedidoFirestore, {
            pending: "Cargando productos",
            success: "Productos cargados",
            error: "Error al cargar los productos",
        });

        pedidoFirestore
            .then((respuesta)=>{
                respuesta.docs.forEach(doc=>{
                    const prod ={id: doc.id , ...doc.data()}
                    productosfire.push(prod)                  
                })
                setProductos(productosfire)
                setLoad(true)
            })
            .catch((error)=>{
                toast.error("error al cargar los productos:" + error.mensaje);
            })
    }, [props.categoria])

    return (
        <div >
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer