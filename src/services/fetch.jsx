import axios from 'axios';
import { useState, useEffect } from 'react';

const NASA_URL = 'https://api.nasa.gov/planetary/apod';
const NASA_API_KEY = 'yjawi9EPzPsmknl45Ng3yoWI8wpLpPNzKSa03kyG';

export const today = new Date(Date.now()).toISOString().slice(0, 10);

export const fetch = () => {

const [date, setDate] = useState(today);
const [apod, setApod] = useState({});
const [error, setError] = useState('')
const [loaded, setLoaded] = useState(false);
    
  useEffect(() => {
    try {
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
      .then((data) => {setApod(data); setLoaded(true)})
    } catch (err) {
        setError('Imagen no encontrada', error);
      };
  }, [date]);

  return { date, setDate, apod, error, loaded }
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
