import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"

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