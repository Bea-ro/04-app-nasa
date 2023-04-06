import React from 'react';
import './Select.css';

const Select = ( {setApi} ) => {

  const handleSelect = (ev) => setApi(ev.target.value); 
  
  return (
    <>
     <select name="api" onChange={handleSelect}>
        <option value="apod">Imagen astronómica del día</option>
        <option value="mars">Imagen de Marte</option> 
        </select>   
    </>
  )
}

export default Select