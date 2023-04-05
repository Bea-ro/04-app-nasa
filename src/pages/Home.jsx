import React from 'react'
import { fetch } from '../services/fetch';
import Input from '../components/Input';
import Select from '../components/Select';
import {Link} from 'react-router-dom';

const Home = () => {
  
  const { date, setDate, setApi } = fetch();

  return (
    <div className="App" >
      
            {/* style={{backgroundImage: `url(${apod.url})`}} */}
        
        <section className="intro">
          <p>Elige una fecha y podrás ver la imagen astronómica del día
            explicada por un astrónomo o una fotografía de Marte tomada por uno de los robots que lo recorren.
            </p>
          <Input date={date} setDate={setDate}/>
          <Select date={date} setApi={setApi}/>
          <p><Link to="photo">Ver foto</Link></p>
        </section>

       
    
    </div>
  );
}

export default Home