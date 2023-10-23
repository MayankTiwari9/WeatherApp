import React from 'react';

const Searched = (props) => {


  return (
    <div>
      {props.getResult.length > 0 &&
        <div>
          {props.getResult.map((response) => {
            const icon = response.weather[0].icon;
            const directions = ['↑ N', '↗ NE', '→ E', '↘ SE', '↓ S', '↙ SW', '← W', '↖ NW'];
            const dir = directions[Math.round(response.wind.deg / 45) % 8];
            const sunset = new Date(response.sys.sunset * 1000);
            const sunsethours = sunset.getHours();
            const sunsetminutes = sunset.getMinutes();
            const sunsetseconds = sunset.getSeconds();
            const sunsetformattedTime = `${sunsethours}:${sunsetminutes}:${sunsetseconds}`;

            const sunrise = new Date(response.sys.sunrise * 1000);
            const sunrisehours = sunrise.getHours();
            const sunriseminutes = sunrise.getMinutes();
            const sunriseseconds = sunrise.getSeconds();
            const sunriseformattedTime = `${sunrisehours}:${sunriseminutes}:${sunriseseconds}`;

            return (
              <div key={response.id}>
                <div className='main-div'>
                  <div className='first-div'>
                    <div className='address-div'>
                      <h1>{response.name}</h1>&nbsp;
                      <p>|</p>&nbsp;
                      <h1>{response.sys.country}</h1>
                    </div>
                    <div className='cloud-div'>
                      <p>Cloud: {response.clouds.all}%</p>
                    </div>
                    <div className='temp-div'>
                      <h1>{(response.main.temp - 273).toFixed(2)}<sup>o</sup></h1>
                    </div>
                  </div>
                  <div className='icon-div'>
                    <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="icon" />
                    <h2>{response.weather[0].description}</h2>
                  </div>
                </div>
                <div className='condition-div'>
                  <div className='condition-heading'>
                    <h4>Weather Conditions</h4>
                  </div>
                  <div className='condition-description'>
                    <div>
                      <h2>Feels Like</h2>
                      <h2>{(response.main.feels_like - 273).toFixed(2)}<sup>o</sup></h2>
                    </div>
                    <div>
                      <h2>Minimum Temperature</h2>
                      <h2>{(response.main.temp_min - 273).toFixed(2)}<sup>o</sup></h2>
                    </div>
                    <div>
                      <h2>Maximum Temperature</h2>
                      <h2>{(response.main.temp_max - 273).toFixed(2)}<sup>o</sup></h2>
                    </div>
                    <div>
                      <h2>Humidity</h2>
                      <h2>{(response.main.humidity)}%</h2>
                    </div>
                  </div>
                  <div className='condition-description'>
                    <div>
                      <h2>Sunrise</h2>
                      <h2>{(sunriseformattedTime)}</h2>
                    </div>
                    <div>
                      <h2>Sunset</h2>
                      <h2>{sunsetformattedTime}</h2>
                    </div>
                    <div>
                      <h2>Wind Speed</h2>
                      <h2>{(response.wind.speed)} kmph</h2>
                    </div>
                    <div>
                      <h2>Wind Direction</h2>
                      <h2>{response.wind.deg} {dir}</h2>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      }
    </div>
  )
}

export default Searched
