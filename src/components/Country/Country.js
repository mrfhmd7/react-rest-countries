import React from 'react';
import './Country.css'

const Country = (props) => {
     const {name, capital, region, population, area, flags} = props.country
     return (
          <div className='country'>
               <img src={flags.png} alt="" />
               <div>
                    <h3>Country: {name.common}</h3>
                    <h4>Capital: {capital}</h4>
                    <h5>Region: {region}</h5>
                    <p>Population: {population}</p>
                    <p><small>Area: {area} km²</small></p>
               </div>
          </div>
     );
};

export default Country;