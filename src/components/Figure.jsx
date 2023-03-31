import React from 'react'

const Figure = ({data}) => { 
   
  return (
    <figure>
    <h1>{data.title}</h1>
    <img src={data.img} alt='a' /> 
    <div>
    <span>{data.date}</span>


      <p>Autor: {data.copyright}</p>
    
    
    </div>
    
    <p>{data.description}</p> 

    </figure>
  )
}

export default Figure