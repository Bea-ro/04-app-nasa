import React from 'react'
import { getFormatDate } from '../utils/format-date'

const MarsText = ( {data} ) => { 

  if (!Object.keys(data).length) {
    return null;
  }
 
  return (
    <div className="image-info">
    <figure className="image-details">
    <img src="../../public/icons/calendar.png" alt="Fecha" className="icon"/>
    <span className="image-date">{getFormatDate(data.earth_date)}</span>
    <img src="../../public/icons/camera.png" alt="Autoría" className="icon"/>
      <span className="copyright">Cámara: {data.camera?.name}</span>  
      </figure>   
    </div>
  )
}

export default MarsText