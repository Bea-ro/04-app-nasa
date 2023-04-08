import React from 'react';
import './Photo.css';

import Image from '../../components/Image/Image';
import Text from '../../components/Text/Text';
import MarsImage from '../../components/Image/MarsImage';
import MarsText from '../../components/Text/MarsText';


const Photo = ( {date, api, apod, loaded, error} ) => {

  return (
    <main className="main-photo">
{api==='apod'? (<Text apod={apod} loaded={loaded} error={error}/>) : (<MarsText apod={apod} date={date} loaded={loaded} error={error}/>)}
{api==='apod'? (<Image apod={apod} loaded={loaded} error={error}/>) : (<MarsImage apod={apod} loaded={loaded} error={error}/>)}
    </main>
  )
}

export default Photo