import './App.css';
import axios from 'axios';
import { useState } from 'react';
import Searched from './Searched';
import Current from './Current';



function App() {

  const [getCity, setCity] = useState('');
  const [getResult, setResult] = useState([]);
  const [getIsShown, setIsShown] = useState(false);

  const formSubmit = async (e) => {
    e.preventDefault();

    if (getCity === '') {
      alert('Please Give a City name');
      setIsShown(false);
      return;
    } else {


      const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
        params: {
          q: getCity,
          days: '3'
        },
        headers: {
          'X-RapidAPI-Key': '65f28a5fcfmsh4bd962448c364f5p183a1fjsn69fd2ae594e3',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setResult([response.data]);
      } catch (error) {
        console.error(error);
      }

    }
  }

  const handleClick = (e) => {
    setIsShown(true)
  }

  return (
    <div>

      <form onSubmit={formSubmit}>
        <input type='text' id='search' value={getCity} onChange={(e) => setCity(e.target.value)} placeholder='Search for City...' />
        <button type='submit' onClick={handleClick}>Search</button>
      </form>
      {getIsShown ? <Searched getResult={getResult} getCity={getCity} setCity={setCity} formSubmit={formSubmit}
        handleClick={handleClick} /> :
        <Current />}
    </div>
  );
}

export default App;
