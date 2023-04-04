import axios from 'axios';
import { useState, useEffect } from 'react';

const NASA_API_KEY = 'yjawi9EPzPsmknl45Ng3yoWI8wpLpPNzKSa03kyG';

const NASA_URL = 'https://api.nasa.gov/';

export const today = new Date(Date.now()).toISOString().slice(0, 10);


export const fetch = () => {

const [date, setDate] = useState(today);

const [apod, setApod] = useState({});
const [error, setError] = useState('')
const [loaded, setLoaded] = useState(false);
const apodEndpoint = `planetary/apod?date=${date}&api_key=${NASA_API_KEY}`
const [endpoint, setEndpoint] = useState(apodEndpoint)
const marsEndpoint = `mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${NASA_API_KEY}`

useEffect(() => {
  try {
    const getApod = async () => {
    const res = await axios.get(NASA_URL + marsEndpoint);
    return res.data.photos[0]}
    
  setLoaded(false)
  getApod()
    .then((data) => {setApod(data); setLoaded(true); })
  } catch (err) {
      setError('Imagen no encontrada', error);
    };
}, [date]);

return { date, setDate, endpoint, apodEndpoint, marsEndpoint, setEndpoint, apod, error, loaded };
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
  //   .catch((err) => setError('Imagen no encontrada', error))

  // }, [date])
