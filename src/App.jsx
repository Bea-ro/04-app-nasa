import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Text from './components/Text';
import Image from './components/Image';
import { getFormatDate } from './utils/format-date';
import Header from './components/Header';

const NASA_URL = 'https://api.nasa.gov/planetary/apod';
const NASA_API_KEY = 'yjawi9EPzPsmknl45Ng3yoWI8wpLpPNzKSa03kyG';

//componetizar todo lo que pueda
//los estados y setters tb puede ir como props
//OCULTAR NASA_API_KEY con dotenv en .env y VER BONUS
//las peticiones en una carpeta llamada services
//un estado para controlar error y poder mostrar algo en pantalla en componenete <Error/> 

function App() {
  const today = new Date(Date.now()).toISOString().slice(0, 10);
  const [date, setDate] = useState(today);
  const [apod, setApod] = useState({});
    
  const handleInput = (ev) => {
    setDate(ev.target.value.toLocaleString()); 
  };  

  //PETICIÓN CON FETCH
  // useEffect(() => {
  //   const getApod = async () => {
  //   const apod = await fetch(`${NASA_URL}?date=${date}&api_key=${NASA_API_KEY}`)
  //   const apodJson = await apod.json();
  //   return {
  //     ...apod,
  //     img: apodJson.url,
  //     title: apodJson.title,
  //     date: apodJson.date,
  //     copyright: apodJson.copyright,
  //     description: apodJson.explanation
  //   }
  //   }
  //   getApod()
  //   .then((data) => setApod(data))
  //   .catch((err) => {console.log('Imagen no encontrada')})

  // }, [date])

  //PETICIÓN CON AXIOS
  useEffect(() => {
    const getApod = async () => {
      const res = await axios.get(`${NASA_URL}?date=${date}&api_key=${NASA_API_KEY}`);
      return {
        ...apod,
        img: res.data.url,
        title: res.data.title,
        date: res.data.date,
        copyright: res.data.copyright,
        description: res.data.explanation,
        type: res.data.media_type
      };
    };
    getApod()
      .then((data) => {
        setApod(data);
      })
      .catch((err) => {
        throw new Error('Imagen no encontrada');
      });
  }, [date]);
 
  return (
    <div className="App">
      <section className="text">
        <Header/>
        <article className="intro">
      <p>
        ¿Te gusta la astronomía? Aquí puedes ver las impresionantes fotografías de la NASA
        explicadas por un astrónomo.
      </p>
      <label>
      Esta imagen es de{date === today? ' hoy' : 'l día ' + getFormatDate(date)}. Selecciona otra fecha para ver más imágenes
        <input type="date" id="date" value={date} max={today} onChange={handleInput} />
      </label>
      </article>
      <Text data={apod} />
      </section>
      
      <section className="image">
      <Image data={apod} />
      </section>
    </div>
  )
    }
    
export default App;





   






