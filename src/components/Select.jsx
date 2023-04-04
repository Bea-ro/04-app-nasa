import React from 'react';
import './Select.css';
// import { apodEndpoint, marsEndpoint } from '../services/fetch'


const Select = ( {endpoint, apodEndpoint, marsEndpoint, setEndpoint} ) => {

  const handleSelect = (ev) => {
    setEndpoint(ev.target.value); 
    // setEndpoint(ev.target.options[ev.target.selectedIndex].value);
  };  

  return (
    <div>
        <label>¡También puedes ver fotos tomadas por los robots que recorren Marte!
     <select name="api" className="api-select" onChange={handleSelect}>
        <option value={apodEndpoint}>Imagen astronómica del día</option>
        <option value={marsEndpoint}>Imagen de Marte</option> 
        </select>   
        </label>
    </div>
  )
}

export default Select