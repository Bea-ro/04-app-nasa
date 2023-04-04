import React from 'react'
import './Image.css';

const Image = ( {data, loaded} ) => { 
   
  return (
    <figure>
    {
    loaded ?    
    (data.media_type === 'image' ? 
    (<img src={data.url} alt={data.title} className="astronomic-picture"/>) : 
    (<iframe src={data.url} frameborder='0' className="astronomic-video"></iframe>)) 
    : (<h2 className="loading-message">Cargando imagen...</h2>)
    }
  
    </figure>
        )
}

export default Image

