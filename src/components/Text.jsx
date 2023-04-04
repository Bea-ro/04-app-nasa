import './Text.css';
import React from 'react'
import { useState } from 'react';
import { getFormatDate } from '../utils/format-date'

const Text = ( {data} ) => { 

  if (!Object.keys(data).length) {
    return null;
  }
 
  const [shortDescription, setShortDescription] =  useState(true)
    
  const toggleDescription = () => {
  setShortDescription(!shortDescription);
  }
   
  return (
    <div className="image-info">
    <h2 className="image-title">{data.title}</h2>

   
    <figure className="image-details">
    <img src="../../public/icons/calendar.png" alt="Fecha" className="icon"/>
    <span className="image-date">{getFormatDate(data.date)}</span>
    <img src="../../public/icons/camera.png" alt="Autoría" className="icon"/>
      <span className="copyright">{data.copyright}</span>  
      </figure>

      <p className="image-description">{shortDescription ? data.explanation.slice(0,240) + '...' : data.explanation}
    <button type="buttom" onClick={toggleDescription}>{shortDescription ? 'seguir leyendo' : 'mostrar menos'}</button>
    </p>
    
      
    </div>
  )
}

export default Text