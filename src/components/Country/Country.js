import React from 'react';
import './Country.css'

const Country = (props) => {
     const {name, capital, region, population, area, flags} = props.country
     return (
          <div className='country'>
               <div>
                    <h3>Country: {name.common}</h3>
                    <h4>Capital: {capital}</h4>
                    <h5>Continent: {region}</h5>
                    <p>Population: {population}</p>
                    <p><small>Area: {area} km²</small></p>
               </div>
               <img src={flags.png} alt="" />
          </div>
     );
};

export default Country;