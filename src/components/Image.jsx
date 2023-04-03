import React from 'react'
import './Image.css';

const Image = ({data}) => { 
   
  return (
    <figure>
    {data.type === 'image' ? 
    (<img src={data.img} alt={data.title} className="astronomic-picture"/>) : 
    (<iframe src={data.img} frameborder="0" className="astronomic-video"></iframe>)  
    }
  
    </figure>
        )
}

export default Image