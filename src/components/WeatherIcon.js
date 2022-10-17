import React from 'react'; 
//https://fontawesome.com/v6/docs/web/use-with/react/add-icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faSun, faUmbrella, faSnowflake, faBolt, } from "@fortawesome/free-solid-svg-icons";



function WeatherIcon ({ weatherType}) {
    // console.log({weatherType});
    switch(weatherType){ 
        case "Clouds": 
        case "Fog":
            return <FontAwesomeIcon icon ={faCloud} />;
        case "Sun": 
        case "Clear":
             return <FontAwesomeIcon icon ={faSun} />;
        case "Rain":
            return <FontAwesomeIcon icon ={faUmbrella} />; 
        case "Snow":
            return <FontAwesomeIcon icon ={faSnowflake} />; 
        case "Thunder": 
            return <FontAwesomeIcon icon ={faBolt} />; 

        
        default: 
            return null; 

    }
    
}

export default WeatherIcon; 