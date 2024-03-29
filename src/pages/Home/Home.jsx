import React from 'react';
import './Home.css';

import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
import { Link } from 'react-router-dom';

const Home = ({ date, setDate, api, setApi }) => {
  return (
    <main className="main-home">
      <h1 className="page-title">
        ¿Quieres ver la imagen astronómica <br /> del día?
      </h1>
      <p className="intro">
        Elige una fecha y podrás ver la imagen astronómica del día explicada por un astrónomo
        <br /> o una fotografía de Marte tomada por uno de los robots que lo recorren.
      </p>
      <div className="options">
        <Input date={date} setDate={setDate} />
        <Select date={date} api={api} setApi={setApi} />
      </div>
      <button className="photo-button">
        <Link to="photo">foto</Link>
      </button>
    </main>
  );
};

export default Home;