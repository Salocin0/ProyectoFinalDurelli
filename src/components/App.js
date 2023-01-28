import { BrowserRouter } from "react-router-dom"
import Main from "./Main"
import Header from "./Header"
import Footer from "./Footer"

const App = () => {
    return (
        <BrowserRouter>    
            <Header/>
            <Main />
            <Footer/>
        </BrowserRouter>
    )
}

export default App