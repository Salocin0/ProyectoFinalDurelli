import ItemListContainer from './ItemListContainer'
import { Route, Routes } from "react-router-dom"
import ItemDetailContainer from "./ItemDetailContainer"

const Main = () => {
    return (
        <main className='main'>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/productos/:categoria" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            </Routes>
        </main>
    )
}

export default Main