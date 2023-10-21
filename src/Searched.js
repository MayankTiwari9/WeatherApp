import React from 'react';

import { WiHumidity, WiCloud, WiWindy } from "react-icons/wi";
import uv from './uv-protection.png';

const Searched = (props) => {



    return (
        <div>
            <div>
                {props.getResult.length > 0 && (
                    <div>
                        {props.getResult.map((result) => {
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
                                                        const time = new Date(hourData.time);
                                                        const hours = time.getHours();
                                                        if (hours >= 3 && hours < 21 && hours % 3 === 0) {
                                                            return (
                                                                <div key={index}>
                                                                    <div>{hourData.time}</div>
                                                                    <div>
                                                                        <img src={hourData.condition.icon} alt='condition' />
                                                                    </div>
                                                                    <div>{hourData.temp_c}<sup>o</sup></div>
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
                                                            <WiHumidity />
                                                        </div>
                                                        <div>
                                                            <p>Humidity</p>
                                                            <h2>{result.current.humidity}<sup>%</sup></h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div>
                                                        <div>
                                                            <WiCloud />
                                                        </div>
                                                        <div>
                                                            <p>Cloud</p>
                                                            <h2>{result.current.cloud}%</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <div>
                                                        <div>
                                                            <WiWindy />
                                                        </div>
                                                        <div>
                                                            <p>Wind</p>
                                                            <h2>{result.current.wind_kph} km/h</h2>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div>
                                                            <img src={uv} alt='UV' />
                                                        </div>
                                                        <div>
                                                            <p>UV index</p>
                                                            <h2>{result.current.uv}</h2>
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
        </div>
    )
}

export default Searched;
