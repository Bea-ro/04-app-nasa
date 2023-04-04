import React from 'react'
import './Image.css';

const MarsImage = ( {data, loaded} ) => { 

  if (!Object.keys(data).length) {
    return null;
  }
   
  return (
    <figure>
    {
    loaded ?    
    (<img src={data.img_src} alt="Marte" className="marte-picture"/>) : 
    (<h2 className="loading-message">Cargando imagen...</h2>)
    }
  
    </figure>
)
}

export default MarsImage