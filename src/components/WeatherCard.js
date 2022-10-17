import React from 'react'; 
import WeatherIcon from "../components/WeatherIcon"; 


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
            
            <div className="WeatherCard--weatherType"> 
         
            <WeatherIcon weatherType= {weatherType} /> 
                        </div>
          
            <p class="type">{weatherType}</p>
            <p class="current"> {currentTemp} &deg;</p>
            <p>High Temp: {highTemp} &deg;</p>
            <p>Low Temp: {lowTemp} &deg;</p>
            <p>Cloudiness: {cloudiness} %</p>
            <p>Humidity:{humidity} %</p>
            <p>Wind Speed: {windSpeed} mph</p>
        
          




       
         </div> 
    )


}


export default WeatherCard; 