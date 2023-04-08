import React from 'react'
import './Image.css';

const MarsImage = ( {apod, loaded, error} ) => { 

  

  return (
    <section className="image">
       {error? (<h2 className="loading-error-message">Imagen no encontrada</h2>) : 
       apod===undefined? (<h2 className="loading-error-message">No hay foto disponible de este día.
       <br />Por favor, elige otra fecha.</h2>) : 
    loaded ?    
    (<img src={apod?.img_src} alt="Marte" id="apod-image"/>) : 
    (<h2 className="loading-error-message">Cargando imagen...</h2>)
    }

</section>
)
}

export default MarsImage


