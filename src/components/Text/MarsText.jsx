import React from 'react';
import './Text.css';
import { Link } from 'react-router-dom';
// import { getFormatDate } from '../utils/format-date'

const MarsText = ( {apod, loaded, error} ) => { 

  return (
    <section className="image-info">
  {error? (<></>) :
    
    loaded ?    
    (<>
      <div className="image-details">
      <h2 className="image-title">Marte</h2>

    <figure className="image-date-copyright">
    <img src="../../public/icons/calendar.png" alt="Fecha" className="icon"/>
    <span className="image-date">{apod?.earth_date}</span>
    <img src="../../public/icons/camera.png" alt="Autoría" className="icon"/>
    <span className="copyright">Cámara: {apod.camera?.name}</span>
    </figure>
    </div>
    <button className="back-button"><Link to="/" >Ver otra foto</Link></button>
    </>
    ) :
    (<h2>Cargando imagen...</h2>)
  }
    </section>
  )
}

export default MarsText