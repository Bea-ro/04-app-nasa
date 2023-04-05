import React from 'react'
import Image from '../components/Image';
import Text from '../components/Text';
import MarsImage from '../components/MarsImage';
import MarsText from '../components/MarsText';
import { fetch } from '../services/fetch';

const Photo = () => {

  const { apod, loaded, error } = fetch();

  return (
    <div>

{api==='apod'? (<Image data={apod} loaded={loaded} error={error}/>) : (<MarsImage data={apod} loaded={loaded} error={error}/>)}
{api==='apod'? (<Text data={apod} loaded={loaded} error={error}/>) : (<MarsText data={apod} loaded={loaded} error={error}/>)}

    </div>
  )
}

export default Photo