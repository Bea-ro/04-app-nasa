import React from 'react'
// import { getFormatDate } from '../utils/format-date'

const MarsText = ( {data, loaded, error} ) => { 

  return (
    <section className="image-info">
  {error? (<h2>{error}</h2>) :
    
    loaded ?    
    (<><img src="../../public/icons/calendar.png" alt="Fecha" className="icon"/>
    <span className="image-date">{data?.earth_date}</span>
    <img src="../../public/icons/camera.png" alt="Autoría" className="icon"/>
    <span className="copyright">Cámara: {data.camera?.name}</span></>) :
    (<h2>Cargando info...</h2>)
  }
    </section>
  )
}

export default MarsText