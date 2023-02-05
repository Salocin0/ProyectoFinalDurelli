import { collection, getDocs, query, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ItemList from './ItemList';
import { db } from '../firebase';

const ItemListContainer = () => {

    const [productos,setProductos] = useState([]);

    const props = useParams();

    useEffect(() => {
        var productosCollection=null
        if(props.categoria!==undefined){
            productosCollection = query(collection(db,'Productos'),where('category','==',props.categoria));
        }else{
            productosCollection = collection(db,'Productos');
        }
        const pedidoFirestore = getDocs(productosCollection);
        const productosfire=[];
        
        toast.promise(pedidoFirestore, {
            pending: 'Cargando productos',
            success: 'Productos cargados',
            error: 'Error al cargar los productos'
        });

        pedidoFirestore
            .then((respuesta)=>{
                respuesta.docs.forEach(doc=>{
                    const prod ={id: doc.id , ...doc.data()};
                    productosfire.push(prod); 
                })
                setProductos(productosfire);
            })
            .catch((error)=>{
                toast.error('error al cargar los productos:' + error.mensaje);
            })
    }, [props.categoria])

    return (
        <div >
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer