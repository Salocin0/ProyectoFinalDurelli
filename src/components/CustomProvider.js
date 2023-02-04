import { createContext, useContext, useState } from "react"

const contexto = createContext()
const Provider = contexto.Provider

export const useCart = () => {
    return useContext(contexto)
}

const CustomProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [totalProductos, setTotalProductos] = useState(0)

    const agregarProducto = (producto, cantidad) => {
        if (estaEnCarrito(producto.id)) {
            const copia = [...carrito];
            const index = copia.findIndex(p => p.id === producto.id);
            copia[index].cantidad += cantidad;
            setTotalProductos(totalProductos+cantidad);
            setCarrito(copia);
        }else{
            const copia = [...carrito];
            copia.push(producto)
            const index = copia.findIndex(p => p.id === producto.id);
            setTotalProductos(totalProductos+cantidad);
            copia[index].cantidad = cantidad;
            setCarrito(copia);
        }
    }

    const eliminarProducto = (id) => {
        if(estaEnCarrito(id)){
            const copia = [...carrito];
            setTotalProductos(Number(totalProductos)-Number(copia.filter(p=>p.id===id)[0].cantidad))
            setCarrito(copia.filter(p => p.id !== id));
        }
     }

    const modificarCantidad = (id, cantidad) => {
        const copia= [...carrito];
        const index = copia.findIndex(p => p.id === id);
        if(0<cantidad && cantidad<=copia[index].stock){
            if(estaEnCarrito(id)){
                setTotalProductos(totalProductos + cantidad-copia[index].cantidad)
                copia[index].cantidad = cantidad;
                setCarrito(copia);
            }
        }
        
    }

    const vaciarCarrito = () => {
        setCarrito([])
        setTotalProductos(0)
    }

    const estaEnCarrito = (id) => {
        const copia= [...carrito];
        const index = copia.findIndex(p => p.id === id);
        return index >= 0;
    }

    const totalCarrito = () => {
        const copia= [...carrito];
        var total=0;
        for (let i = 0; i < copia.length; i++) {
            total = total+copia[i].price*copia[i].cantidad
        }
        return total;
    }

    const valorDelContexto = {
        carrito: carrito,
        totalProductos: totalProductos,
        setCarrito : setCarrito , 
        setTotalProductos : setTotalProductos,
        agregarProducto: agregarProducto,
        vaciasCarrito: vaciarCarrito,
        eliminarProducto:eliminarProducto,
        modificarCantidad:modificarCantidad,
        totalCarrito:totalCarrito
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider