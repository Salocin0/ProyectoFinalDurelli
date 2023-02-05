import { InputGroup, Container, Button, Form, Row, Col, ListGroup } from 'react-bootstrap';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCart } from './CustomProvider';
import { toast } from 'react-toastify';
import { db } from '../firebase';

const CarritoForm = () => {
    const navigate = useNavigate();

    const [idVenta, setIdVenta] = useState("");
    const [nombre,setNombre] = useState("");
    const [apellido,setApellido] = useState("");
    const [telefono,setTelefono] = useState("");
    const [email,setEmail] = useState("");
    
    const {carrito,totalCarrito,vaciarCarrito} = useCart();

    const handleClick = (e) => {
        var productosa= [];
        var objetoproductos={cantidad:0,producto:null};
        carrito.map((prod) => {
            objetoproductos={cantidad:prod.cantidad,producto:prod.title}
            return productosa.push(objetoproductos)
        });

        const nuevaVenta = {
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
            email: email,
            total: totalCarrito(),
            productos: productosa
        };

        if(validarVenta(nuevaVenta)===true){
            const docRef = addDoc(collection(db, 'Ventas'), nuevaVenta);
        
            docRef.then((respuesta)=>{
                setIdVenta(respuesta.id)
            }).catch((error)=>{
                toast.error("error al guardar la venta:" + error.mensaje);
            });
    
            toast.promise(docRef, { 
                pending: 'Registrando Compra', 
                success: 'Compra Exitosa', 
                error: 'Error al registra la compra'
            });
        }
        
    };

    const validarVenta = (venta) => {
        var nombre=false;
        var apellido=false;
        var telefono=false;
        var email=false;
        
        if(venta.nombre.length<2){
            toast.error('nombre no valido, ingrese un nombre con mas de dos caracteres');
        }else{
            nombre=true;
        }

        if(venta.apellido.length<4){
            toast.error('apellido no valido, ingrese un apellido con mas de cuatro caracteres');
        }else{
            apellido=true;
        };

        if(venta.telefono.length<6 || venta.telefono.replace(/\s/g, '').length>10){
            toast.error('telefono no valido, ingrese un telefono del formato 1234 123456 o 123456');
        }else{
            telefono=true;
        }

        if(venta.email.indexOf('@') === -1){
            toast.error('Email no valido, ingrese un Email del formato mi@correo.com');
        }else{
            email=true;
        }

        if(nombre===true && apellido===true && telefono===true && email===true){
            return true;
        }else{
            return false;
        }
    };

    useEffect(() => {
        if(idVenta!==''){
            vaciarCarrito();
            navigate('/ventas/'+idVenta);
        }  
    }, [idVenta]);
    
    const handleChangeName = (e) => {
        setNombre(e.target.value);
    }

    const handleChangeApellido = (e) => {
        setApellido(e.target.value);
    }
    
    const handleChangeTelefono = (e) => {
        setTelefono(e.target.value);
    }
    
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    
    return (
        <Container fluid>
            <Row>
                <Col xs={6}>
                    <h2>Lista de productos:</h2>
                    <ListGroup.Item>{carrito.map((producto) => { return (<div> {producto.cantidad} X {producto.title} </div>)})}</ListGroup.Item>
                    <h4>Haciendo un total de {totalCarrito()}$</h4>
                </Col>
                <Col xs={6}>
                    <h2>Ingrese los datos para finalizar la compra</h2>
                    <InputGroup>    
                        <InputGroup className='inputform'>
                            <Form.Control aria-label='Nombre' type='text' onChange={handleChangeName} aria-describedby='inputGroup-sizing-sm' placeholder='Nombre'/>
                        </InputGroup>
                        <InputGroup className='inputform'>
                            <Form.Control aria-label='Apellido' type='text' onChange={handleChangeApellido} aria-describedby='inputGroup-sizing-sm' placeholder='Apellido'/>
                        </InputGroup>
                        <InputGroup className='inputform'>
                            <Form.Control aria-label='Telefono' type='number' onChange={handleChangeTelefono} aria-describedby='inputGroup-sizing-sm' placeholder='1234-123456'/>
                        </InputGroup>
                        <InputGroup className='inputform'>
                            <Form.Control aria-label='Email' type='text' onChange={handleChangeEmail} aria-describedby='inputGroup-sizing-sm' placeholder='Email'/>
                        </InputGroup>
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Button className='btnform' onClick={handleClick}>Finalizar compra</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default CarritoForm