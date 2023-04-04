import React from 'react';
import './Input.css';
import { getFormatDate } from '../utils/format-date';
import { today } from '../services/fetch';


const Input = ( {date, setDate}) => {

    const handleInput = (ev) => {
        setDate(ev.target.value.toLocaleString()); 
      };  

  return (
    <div>
 <label>
      Esta imagen es de{date === today? ' hoy' : 'l día ' + getFormatDate(date)}. Selecciona otra fecha para ver más imágenes
        <input type="date" id="date" value={date} max={today} onChange={handleInput} />
      </label>
    </div>
  )
}

export default Input