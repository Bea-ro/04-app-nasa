import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

//OCULTAR NASA_API_KEY con dotenv en .env

function App() {

  return (
    <>
    <Header />
    <Outlet /> 
    <Footer />
    </>
    )

}

export default App;
