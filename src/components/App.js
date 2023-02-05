import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomProvider from './CustomProvider';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

const App = () => {
    return (
        <CustomProvider>
            <BrowserRouter>    
                <Header/>
                <Main />
                <Footer/>
            </BrowserRouter>
            <ToastContainer position='bottom-right' autoClose={1000} hideProgressBar={true} 
                            closeOnClick rtl={false} draggable pauseOnHover theme='colored'/>
        </CustomProvider>
    )
}

export default App