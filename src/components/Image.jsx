import React from 'react'
import './Image.css';

const Image = ({data}) => { 
   
  return (
    <figure>
    <img src={data.img} alt={data.title} className="astronomic-picture"/> 
    </figure>
        )
}

export default Image