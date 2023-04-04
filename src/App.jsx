import './App.css';
import { fetch } from './services/fetch';
import Header from './components/Header';
import Input from './components/Input';
import Select from './components/Select'
import Text from './components/Text';
import MarsText from './components/MarsText';
import Image from './components/Image';
import MarsImage from './components/MarsImage';

//OCULTAR NASA_API_KEY con dotenv en .env
//ojo cuidado que las de marte de hoy no salen
//pintar error
//imágenes de la semana en carrusel y hover en la del día

function App() {

  const { date, setDate, api, setApi, apod, error, loaded } = fetch();

  return (
    <div className="App">
      <section className="text">
        <Header />
        <article className="intro">
          <p>
            ¿Te gusta la astronomía? Elige una fecha y podrás ver la imagen astronómica del día
            explicada por un astrónomo o una foto de Marte.
            </p>
          <Input date={date} setDate={setDate}/>
          <Select date={date} setApi={setApi}/>
        </article>
        {api==='apod'? (<Text data={apod} />) : (<MarsText data={apod}/>)}
      </section>

      <section className="image">
        {api==='apod'? (<Image data={apod} loaded={loaded}/>) : (<MarsImage data={apod} loaded={loaded}/>)}
      </section>
    </div>
  );
}

export default App;
