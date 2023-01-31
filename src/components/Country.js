import React from 'react'
import style from './Country.css';

const Country = (props) => {
    const {country}= props;
    const {name,flags,capital,population, area} = country;

    const handleRemoveCountry =(name)=>{
      props.onRemoveCountry(name);
    }

  return (
    <article className='country'>
      <div>
        <img className='flag' src={flags.png} alt={name.common} />
        <h3>Name: {name.common}</h3>
        <h3>Population: {population}</h3>
        <h3>Capital: {capital}</h3>
        <h3>Area: {area}</h3>
        <button className='btn' onClick={()=>handleRemoveCountry(name.common)}>Remove Country</button>
      </div>
    </article>
  )
}

export default Country
