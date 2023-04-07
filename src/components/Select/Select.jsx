import React from 'react';
import './Select.css';

const Select = ( {api, setApi} ) => {

  const handleSelect = (ev) => setApi(ev.target.value) 
  
  return (
    <>
     <select name="api" value={api} onChange={handleSelect}>
        <option value="apod">Imagen astronómica del día</option>
        <option value="mars">Imagen de Marte</option> 
        </select>   
    </>
  )
}

export default Select