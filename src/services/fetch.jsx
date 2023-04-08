import axios from 'axios';
import { useState, useEffect } from 'react';


export const today = new Date(Date.now()).toISOString().slice(0, 10);

export const fetch = () => {

const [date, setDate] = useState(today);
const [api, setApi] = useState('apod')
const [apod, setApod] = useState({});
const [error, setError] = useState(false)
const [loaded, setLoaded] = useState(false);


useEffect(() => {

  setLoaded(false)
  setError(false)

  const getApod = async () => {
    
  try {
      if (api==='apod') { 
      const res = await axios.get(`${import.meta.env.VITE_NASA_URL}planetary/apod?date=${date}&api_key=${import.meta.env.VITE_NASA_API_KEY}`) 
      return res.data;
      
    } else {
      // date === today? setDate(twoDaysBefore) : setDate(date)
      const res = await axios.get(`${import.meta.env.VITE_NASA_URL}mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${import.meta.env.VITE_NASA_API_KEY}`)
      return res.data?.photos[0];
      
      }
  } catch (err) {
  setError(true); 
  };
  }
  
  getApod().then((data) => {
    setApod(data); 
    setLoaded(true);})
  
}, [date, api]);

return { date, setDate, api, setApi, apod, error, loaded };
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
