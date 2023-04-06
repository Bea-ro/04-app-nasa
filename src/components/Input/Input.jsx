import React from 'react';
import './Input.css';
import { today } from '../../services/fetch';

const Input = ( {date, setDate} ) => {

    const handleInput = (ev) => {
        setDate(ev.target.value.toLocaleString()); 
      };  

  return (
    <>
        <input type="date" value={date} max={today} onChange={handleInput} />
    </>
  )
}

export default Input