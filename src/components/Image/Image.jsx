import React from 'react'
import './Image.css';

const Image = ( {apod, error, loaded} ) => { 

  return (
    <section className="image">

    {error? (<h2 className="loading-error-message">Imagen no encontrada</h2>) :
    
    loaded ?   
    (apod.media_type === 'image' ? 
    (<img src={apod.url} alt={apod.title} className="apod" id="apod-image"/>) : 
    (<iframe src={apod.url} frameborder='0' className="apod" id="apod-video"></iframe>)) 
    : (<h2 className="loading-error-message">Cargando imagen...</h2>)
    
  }
    </section>
        )
}

export default Image

