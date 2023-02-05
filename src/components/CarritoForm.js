import { useState } from "react"
import { useEffect } from "react"
import CarritoDetalle from "./CarritoDetalle"
import {useCart} from './CustomProvider'
import { db } from "../firebase"
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ListGroup } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

const CarritoForm = () => {
    const navigate = useNavigate();

    const [idVenta, setIdVenta] = useState("");
    const [nombre,setNombre] = useState("")
    const [apellido,setApellido] = useState("")
    const [telefono,setTelefono] = useState("")
    const [email,setEmail] = useState("")
    
    const {carrito,totalCarrito,vaciasCarrito} = useCart()

    const handleClick = (e) => {
        var productosa= []
        var objetoproductos={cantidad:0,producto:null}
        {carrito.map((prod) => {
            objetoproductos={cantidad:prod.cantidad,producto:prod.title}
            return productosa.push(objetoproductos)
        })}

        const nuevacompra = {
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
            email: email,
            total: totalCarrito(),
            productos: productosa
        }

        const docRef = addDoc(collection(db, 'Ventas'), nuevacompra);
        
        docRef.then((respuesta)=>{
            setIdVenta(respuesta.id)
        }).catch((error)=>{
            console.log(error)
        })

        toast.promise(docRef, { 
            pending: "Registrando Compra", 
            success: "Compra Exitosa", 
            error: "Error al registra la compra"
        })
        
    }

    useEffect(() => {
        if(idVenta!==""){
            vaciasCarrito()
            navigate('/ventas/'+idVenta);
        }  
    }, [idVenta]);
    
    const handleChangeName = (e) => {
        setNombre(e.target.value)
    }

    const handleChangeApellido = (e) => {
        setApellido(e.target.value)
    }
    
    const handleChangeTelefono = (e) => {
        setTelefono(e.target.value)
    }
    
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    
    return (
        <Container fluid>
            <Row>
                <Col xs={6}>
                    <h2>Lista de productos:</h2>
                    <ListGroup.Item>{carrito.map((producto) => { return (<CarritoDetalle producto={producto} key={producto.id}/>)})}</ListGroup.Item>
                    <h4>Haciendo un total de {totalCarrito()}$</h4>
                </Col>
                <Col xs={6}>
                    <h2>Ingrese los datos para finalizar la compra</h2>
                    <InputGroup>    
                        <InputGroup className="inputform">
                            <Form.Control aria-label="Nombre" type="text" onChange={handleChangeName} aria-describedby="inputGroup-sizing-sm" placeholder="Nombre"/>
                        </InputGroup>
                        <InputGroup className="inputform">
                            <Form.Control aria-label="Apellido" type="text" onChange={handleChangeApellido} aria-describedby="inputGroup-sizing-sm" placeholder="Apellido"/>
                        </InputGroup>
                        <InputGroup className="inputform">
                            <Form.Control aria-label="Nombre" type="number" onChange={handleChangeTelefono} aria-describedby="inputGroup-sizing-sm" placeholder="1234-123456"/>
                        </InputGroup>
                        <InputGroup className="inputform">
                            <Form.Control aria-label="Apellido" type="text" onChange={handleChangeEmail} aria-describedby="inputGroup-sizing-sm" placeholder="Email"/>
                        </InputGroup>
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Button className="btnform" onClick={handleClick}>Finalizar compra</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default CarritoForm