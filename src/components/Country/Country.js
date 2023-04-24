import React from 'react';
import './Country.css'

const Country = (props) => {
     return (
          <div className='country'>
               <div>
                    <h1>Country: {props.name}</h1>
                    <h3>Capital: {props.capital}</h3>
                    <h5>Continent: {props.region}</h5>
                    <p>Population: {props.population}</p>
                    <p><small>Area: {props.area} km²</small></p>
               </div>
               <img src={props.flags} alt="" />
          </div>
     );
};

export default Country;