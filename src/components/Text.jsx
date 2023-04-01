import React from 'react'
import { useState } from 'react';
import './Text.css';

const Text = ({data}) => { 

  if (!Object.keys(data).length) {
    return null;
  }
 
  const [shortDescription, setShortDescription] =  useState(true)
    
  const toggleDescription = () => {
  setShortDescription(!shortDescription);
  }
   
  return (
    <div>
    <h1>{data.title}</h1>
    
    <div>
    <span>{data.date}</span>
      <p>Autor: {data.copyright}</p>  
      <p>{shortDescription ? data.description.slice(0,240) : data.description}</p>
    <button type="buttom" onClick={toggleDescription}>{shortDescription ? '...Leer más' : 'Mostrar menos'}</button>
   
      </div>
    </div>
  )
}

export default Text