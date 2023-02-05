import { BrowserRouter } from "react-router-dom"
import CustomProvider from "./CustomProvider"
import Main from "./Main"
import Header from "./Header"
import Footer from "./Footer"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <CustomProvider>
            <BrowserRouter>    
                <Header/>
                <Main />
                <Footer/>
            </BrowserRouter>
            <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={true} 
                            closeOnClick rtl={false} draggable pauseOnHover theme="colored"/>
        </CustomProvider>
    )
}

export default App