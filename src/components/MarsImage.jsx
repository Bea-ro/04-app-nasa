import React from 'react'
import './Image.css';

const MarsImage = ( {data, loaded, error} ) => { 

  return (
    <section className="image">
       {error? (<h2>{error}</h2>) : 
    
    loaded ?    
    (<img src={data?.img_src} alt="Marte" className="marte-picture"/>) : 
    (<h2 className="loading-message">Cargando imagen...</h2>)
    }

</section>
)
}

export default MarsImage