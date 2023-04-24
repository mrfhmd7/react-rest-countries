import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries() {
  const [country, setCountry] = useState([])
  return (
    <div>
      <h1>Visiting Every Countries of the World!!</h1>
    </div>
  );
};

export default App;
