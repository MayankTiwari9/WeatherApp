import './App.css';
import axios from 'axios';
import { useState } from 'react';


function App() {

  const [getCity, setCity] = useState('');
  const [getResult, setResult] = useState([]);

  const formSubmt = async (e) => {
    e.preventDefault();


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
      console.log(response.data);
      setResult([response.data]);
      console.log(getResult);
    } catch (error) {
      console.error(error);
    }
  }




  return (
    <div className="App">
      <div>
        <form onClick={formSubmt}>
          <input type='text' id='search' value={getCity} onChange={(e) => setCity(e.target.value)} placeholder='Search for City...' />
          <button>Search</button>
        </form>
      </div>
      {getResult.length > 0 && ( 
        <div> 
          {getResult.map((result) => {
            console.log(result);
            return (
              <div key={result.location}>
                <div>
                  <div>
                    <div>
                      <div>
                        <h1>{result.location.name}</h1>
                      </div>
                      <div>
                        <p>Chance of rain: {result.current.condition.text}</p>
                      </div>
                      <div>
                        <h1>{result.current.temp_c}<sup>o</sup></h1>
                      </div>
                    </div>
                    <div>
                      <img src={result.current.condition.icon} alt='condition'></img>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <p>Today's Forecast</p> 
                  </div>   
                  <div>
              {result.forecast.forecastday[0] && (   
                <div>
                  {result.forecast.forecastday[0].hour.map((hourData, index) => {
                    // Filter and display times from 9 AM to 9 PM
                    const time = new Date(hourData.time);
                    const hours = time.getHours();  
                    if (hours >= 9 && hours <= 21 && hours % 3 === 0) {
                      return (
                        <div key={index}>
                          <div>Time: {hourData.time}</div>
                          <div>Condition: 
                            <img src={hourData.condition.icon} alt='condition' />

                            </div>
                          <div>Temperature: {hourData.temp_c}<sup>o</sup></div>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              )}
            </div>
                  
                </div>
                <div>
                  <div>
                    <div>
                      <p>Air Condition</p>
                    </div>
                    <div>
                      <button>See more</button>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <div>
                            <img src='#' alt='Feel' />
                          </div>
                          <div>
                            <p>Real Feel</p>
                            <h2>30<sup>o</sup></h2>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div>
                            <img src='#' alt='Feel' />
                          </div>
                          <div>
                            <p>Chance of Rain</p>
                            <h2>0%</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div>
                          <div>
                            <img src='#' alt='Feel' />
                          </div>
                          <div>
                            <p>Wind</p>
                            <h2>0.2 km/h</h2>
                          </div>
                        </div>
                        <div>
                          <div>
                            <img src='#' alt='Feel' />
                          </div>
                          <div>
                            <p>UV index</p>
                            <h2>3</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            )
          })}
        </div>)}
    </div>
  );
}

export default App;
