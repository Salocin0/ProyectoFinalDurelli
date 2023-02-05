import { collection , getDocs, query, where } from 'firebase/firestore';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { db } from '../firebase';

const Carrito = () => {
    const [venta,setVenta] = useState([]);

    const props = useParams();

    useEffect(() => {
        const queryIdVenta = query(collection(db, 'Ventas'),where('__name__','==',props.id));
        const pedidoFirestore = getDocs(queryIdVenta);

        pedidoFirestore
            .then((respuesta)=>{
                const vent = {id: props.id , ...respuesta.docs[0].data()};
                setVenta(vent);
            })
            .catch((error)=>{
                toast.error('Error al ver la venta:' + error.mensaje);
            });
    }, [props.id])

    return (
        <div className='divventa'>
            <h2 className='contenventa'>Gracias por su compra!</h2>
            <h3 className='contenventa'>Su codigo de compra es: {venta.id} </h3>
            <Link to='/'>
                <Button className='contenventa'>Volver al inicio</Button>
            </Link>
        </div>
    )
}

export default Carrito