import { fetch } from './services/fetch';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Photo from './pages/Photo/Photo';


function App() {

const { date, setDate, api, setApi, apod, error, loaded  } = fetch();

  return (
    <>
    <Header />
    <Routes>
    <Route index element={<Home date={date} setDate={setDate} api={api} setApi={setApi}/>}/>
    <Route path='/photo' element={<Photo api={api} apod={apod} error={error} loaded={loaded}/>} />
    </Routes>

    <Footer />
    </>
    )

}

      
export default App;


