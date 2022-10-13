import React from 'react'; 


function WeatherCard({
 city, 
 currentTemp,
 cloudiness,
 humidity, 
 lowTemp, 
 highTemp, 
 weatherType,
 windSpeed,
}) {
    return (
        <div className="WeatherCard">
            <h2 class="title">{city}</h2>
            <p class="type">{weatherType}</p>
            <p class="current"> {currentTemp}</p>
            <p>High Temp: {highTemp}</p>
            <p>Low Temp: {lowTemp}</p>
            <p>Cloudiness: {cloudiness}</p>
            <p>Humidity:{humidity}</p>
            <p>Wind Speed: {windSpeed}</p>
        
          




         </div>
    )


}


export default WeatherCard; 