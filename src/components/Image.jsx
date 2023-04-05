import React from 'react'
import './Image.css';

const Image = ( {data, error, loaded} ) => { 
   
  return (
    <section className="image">
    {error? (<h2 className="loading-error-message">Imagen no encontrada</h2>) :
    
    loaded ? 
    // Esta es la imagen astronómica de{date === today? ' hoy' : 'l día ' + getFormatDate(date)}.    
    (data.media_type === 'image' ? 
    (<img src={data.url} alt={data.title} className="apod" id="apod-image"/>) : 
    (<iframe src={data.url} frameborder='0' className="apod" id="apod-video"></iframe>)) 
    : (<h2 className="loading-error-message">Cargando imagen...</h2>)
    
  }
    </section>
        )
}

export default Image

