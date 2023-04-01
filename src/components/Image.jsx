import React from 'react'
import './Image.css';

const Image = ({data}) => { 
   
  return (
    <figure>
    <img src={data.img} alt={data.title} /> 
    </figure>
        )
}

export default Image