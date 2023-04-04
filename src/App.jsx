import './App.css';
import { fetch } from './services/fetch';
import Header from './components/Header';
import Input from './components/Input';
import Select from './components/Select'
import Text from './components/Text';
import Image from './components/Image';


//OCULTAR NASA_API_KEY con dotenv en .env
//acabar en fetch endpoint toggle pero ojo cuidado que las de marte de hoy no salen
//pintar error
//imágenes de la semana en carrusel y hover en la del día

function App() {

  const { date, setDate, endpoint, apodEndpoint, marsEndpoint, setEndpoint, apod, error, loaded } = fetch();

  return (
    <div className="App">
      <section className="text">
        <Header />
        <article className="intro">
          <p>
            ¿Te gusta la astronomía? Elige una fecha y podrás ver la imagen astronómica del día
            explicada por un astrónomo o una foto de Marte.
            </p>
          <Input date={date} setDate={setDate} />
          <Select endpoint={endpoint} setEndpoint={setEndpoint} apodEndpoint={apodEndpoint} marsEndpoint={marsEndpoint}/>
        </article>
        <Text data={apod} />
      </section>

      <section className="image">
        <Image data={apod} loaded={loaded}/>
      </section>
    </div>
  );
}

export default App;
