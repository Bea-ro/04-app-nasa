import './Text.css';
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { getFormatDate } from '../../utils/format-date'

const Text = ( {apod, error, loaded} ) => { 
 
  const [shortDescription, setShortDescription] =  useState(true)
    
  const toggleDescription = () => {
  setShortDescription(!shortDescription);
  }
   
  return (
    <section className="image-info">
    {error? (<></>) :
    loaded ?  
    <>
    <div className="image-details">
    <h2 className="image-title">{apod.title}</h2>
  
    <figure className="image-date-copyright">
    <img src="../../public/icons/calendar.png" alt="Fecha" className="icon"/>
    <span className="image-date">{getFormatDate(apod.date)}</span>
    <img src="../../public/icons/camera.png" alt="Autoría" className="icon"/>
    <span className="copyright">{apod.copyright? apod.copyright : 'Copyright público'}</span>  
    </figure>
    </div>

    <p className="image-description">{shortDescription ? apod.explanation.slice(0,240) + '...' : apod.explanation}
    <button type="buttom" className="text-button" onClick={toggleDescription}>{shortDescription ? 'seguir leyendo' : 'mostrar menos'}</button>
    </p>
    <button className="back-button"><Link to="/" >Ver otra foto</Link></button>
    </> : <></>
    
  }
    </section>
  )
}

export default Text