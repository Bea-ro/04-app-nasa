import React from 'react';
import './Select.css';

const Select = ( {setApi} ) => {

  const handleSelect = (ev) => {setApi(ev.target.value);}

  return (
    <div>
        <label>¡También puedes ver fotos tomadas por los robots que recorren Marte!
     <select name="api" className="api-select" onChange={handleSelect}>
        <option value="apod">Imagen astronómica del día</option>
        <option value="mars">Imagen de Marte</option> 
        </select>   
        </label>
    </div>
  )
}

export default Select