import React, { useState } from 'react';
import Current from './Current';
import Searched from './Searched';
import axios from 'axios';
import "./App.css";
import Footer from './Footer';

const App = () => {

  const [getCity, setCity] = useState('');
  const [getResult, setResult] = useState([]);
  const [getIsShown, setIsShown] = useState(false);

  const formSubmit = (e) => {
    e.preventDefault();

    if (getCity === '') {
      alert('Please Give a City Name to Get Weather Data');
      setIsShown(false);
      return;
    } else {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${getCity}&appid=0b4ae15b6e44d28fd75aa378da3ef714`)
        .then(res => {
          setResult([res.data])
        })
        .catch(err => console.log(err))

        setIsShown(true);
    }
  }


  return (
    <div className='main'>

      <form onSubmit={formSubmit}>
        <input
          type='text'
          id='search'
          placeholder='Search City.....'
          onChange={(e) => setCity(e.target.value)}
        />
      </form>

      {getIsShown ?  <Searched formSubmit={formSubmit} getResult={getResult}/> : <Current />}
      
      <Footer/>
    </div>
  )
}

export default App
