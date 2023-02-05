import ItemDetailContainer from './ItemDetailContainer';
import ItemListContainer from './ItemListContainer';
import { Route, Routes } from 'react-router-dom';
import VentaDetalle from './VentaDetalle';
import CarritoForm from './CarritoForm';
import Carrito from './Carrito';

const Main = () => {
    return (
        <main className='main'>
            <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/productos/:categoria' element={<ItemListContainer/>}/>
                <Route path='/item/:id' element={<ItemDetailContainer/>}/>
                <Route path='/carrito' element={<Carrito/>}/>
                <Route path='/compra' element={<CarritoForm/>}/>
                <Route path='/ventas/:id' element={<VentaDetalle/>}/>
            </Routes>
        </main>
    )
}

export default Main