import React from 'react';
import './Select.css';

const Select = ( {setApi} ) => {

  const handleSelect = (ev) => setApi(ev.target.value); 
  
  return (
    <div>
     <select name="api" className="api-select" onChange={handleSelect}>
        <option value="apod" defaultValue>Imagen astronómica del día</option>
        <option value="mars">Imagen de Marte</option> 
        </select>   
    </div>
  )
}

export default Select