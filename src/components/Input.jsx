import React from 'react';
import './Input.css';
import { today } from '../services/fetch';
import { getFormatDate } from '../utils/format-date';

const Input = ( {date, setDate} ) => {

    const handleInput = (ev) => {
        setDate(ev.target.value.toLocaleString()); 
      };  

  return (
    <div>
        <input type="date" id="date" value={date} max={today} onChange={handleInput} />
    </div>
  )
}

export default Input