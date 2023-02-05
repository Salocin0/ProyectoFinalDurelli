import { collection , getDocs, query, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ItemDetail from './ItemDetail';
import { db } from '../firebase';

const ItemDetailContainer = () => {
    
    const [load, setLoad] = useState(false);
    const [producto,setProducto] = useState([]);

    const props = useParams();
        
    useEffect(() => {
        const queryIdProducto = query(collection(db, 'Productos'),where('__name__','==',props.id));
        const pedidoFirestore = getDocs(queryIdProducto);

        toast.promise(pedidoFirestore, { 
            pending: 'Cargando producto', 
            success: 'Producto cargado', 
            error: 'Error al cargar el producto'
        });

        pedidoFirestore
            .then((respuesta)=>{
                const prod = {id: props.id , ...respuesta.docs[0].data()};
                setProducto(prod);
            })
            .catch((error)=>{
                toast.error('Error al cargar el producto:' + error.mensaje);
            })
    }, [props.id])

    useEffect(() => {
        setLoad(true);
      }, [producto])

    return (
        <div >
            {load ? <ItemDetail producto={producto} />  : null }
        </div>
    )
}

export default ItemDetailContainer