import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Figure from './components/Figure';


const NASA_URL = 'https://api.nasa.gov/planetary/apod' 
const NASA_API_KEY = 'yjawi9EPzPsmknl45Ng3yoWI8wpLpPNzKSa03kyG' 

//OJO VIDEOS. OCULTAR NASA_API_KEY con dotenv en .env y VER BONUS
//separar cosas en componentes
 
function App() {

const today = new Date(Date.now()).toISOString().slice(0, 10);
const [date, setDate] = useState(today)
const [apod, setApod] = useState({})

const handleInput = (ev) => {
  setDate(ev.target.value.toLocaleString()); 
};

const formatDate = () => {
  if (date === today) {
    return ' hoy'
  } else {
  const dateFragment = date.split("-");
  return 'l día ' + dateFragment[2] + "-" + dateFragment[1] + "-" + dateFragment[0];
}
}

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

  const res = await axios.get(`${NASA_URL}?date=${date}&api_key=${NASA_API_KEY}`)
  return {
    ...apod,
    img: res.data.url,
    title: res.data.title,
    date: res.data.date,
    copyright: res.data.copyright,
    description: res.data.explanation    
  } 
  }
  getApod()
  .then((data) => {setApod(data); console.log(data)})
  .catch((err) => {throw new Error('Imagen no encontrada')})

}, [date])

return (
    <div className="App"> 
    <h1>Imagen astronómica del día</h1>
    <p>¿Te gusta la astronomía? Aquí puedes ver las impresionantes fotografías de la NASA explicadas por un astrónomo.</p>
    <p>Esta imagen es de{formatDate(date)}.</p> 
    <label>Selecciona otra fecha para ver más imágenes: 
    <input type="date" id="date" value={date} max={today} onChange={handleInput}/>
    </label>
    <Figure data={apod}/>
    </div>
 )
}

export default App
