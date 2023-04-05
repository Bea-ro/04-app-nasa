import axios from 'axios';
import { useState, useEffect } from 'react';

const NASA_API_KEY = 'yjawi9EPzPsmknl45Ng3yoWI8wpLpPNzKSa03kyG';
const NASA_URL = 'https://api.nasa.gov/';
// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2023-04-04&api_key=yjawi9EPzPsmknl45Ng3yoWI8wpLpPNzKSa03kyG
export const today = new Date(Date.now()).toISOString().slice(0, 10);
const twoDaysBefore = new Date (new Date().getTime()-48*60*60*1000).toISOString().slice(0, 10);


export const fetch = () => {

const [date, setDate] = useState(today);
const [apod, setApod] = useState({});
const [error, setError] = useState(false)
const [loaded, setLoaded] = useState(false);
const [api, setApi] = useState('apod')

useEffect(() => {

  setLoaded(false)
  setError(false)

  const getApod = async () => {
    
  try {
      if (api==='apod') { 
      const res = await axios.get(`${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`) 
      return res.data;
      
    } else {
      //si date es hoy pasala a yesterday y si no se queda date 
      date === today? setDate(twoDaysBefore) : setDate(date)
      const res = await axios.get(`${NASA_URL}mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${NASA_API_KEY}`)
      return res.data?.photos[0];
      
      }
  } catch (err) {
  setError(true); 
  };
  }
  
  getApod().then((data) => {setApod(data); setLoaded(true); console.log(data)})
  
}, [date, api]);

return { date, setDate, api, setApi, apod, error, loaded };
};

// export const fetch = () => {

// const [date, setDate] = useState(today);
// const [apod, setApod] = useState({});
// const [error, setError] = useState(false)
// const [loaded, setLoaded] = useState(false);
// const [api, setApi] = useState('apod')

// useEffect(() => {

//   setLoaded(false)
//   setError(false)

//   const getApod = async () => {
//   try {
//       if (api==='apod') { 
//       const res = await axios.get(`${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`) 
//       return res.data;
//     } else { 
//       const res = await axios.get(`${NASA_URL}mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${NASA_API_KEY}`)
//       return res.data.photos[0]
//       }
//   } catch (err) {
//   setError(true); 
//   };
//   }
  
//   getApod().then((data) => {setApod(data); setLoaded(true)})
  
// }, [date, api]);

// return { date, setDate, api, setApi, apod, error, loaded };
// };


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
