import './App.css';
import { fetch } from './services/fetch';
import Header from './components/Header';
import Input from './components/Input';
import Text from './components/Text';
import Image from './components/Image';

//OCULTAR NASA_API_KEY con dotenv en .env y VER BONUS
//pintar el error

function App() {
  const { date, setDate, apod, error, loaded } = fetch();

  return (
    <div className="App">
      <section className="text">
        <Header />
        <article className="intro">
          <p>
            ¿Te gusta la astronomía? Aquí puedes ver las impresionantes fotografías de la NASA
            explicadas por un astrónomo.
          </p>
          <Input date={date} setDate={setDate} />
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
