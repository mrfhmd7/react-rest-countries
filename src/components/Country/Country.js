import React from 'react';
import './Country.css'

const Country = (props) => {
     return (
          <div className='country'>
               <h1>Country: {props.name}</h1>
               <h3>Capital: {props.capital}</h3>
               <h4>Population: {props.population}</h4>
               <h4>Continent: {props.region}</h4>
               <img src={props.flags} alt="" />
          </div>
     );
};

export default Country;