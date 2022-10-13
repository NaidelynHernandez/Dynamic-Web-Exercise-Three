import React, {useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useSearchParams } from 'react-router-dom'; // https://ultimatecourses.com/blog/query-strings-search-params-react-router
import {WEATHER_APP_API_KEY}  from "../API_KEYS";
import WeatherCard from "../components/WeatherCard"; 
import Header from "../components/Header"; 
import WeatherIcon from "../components/WeatherIcon"; 





//import { scryRenderedComponentsWithType } from "react-dom/test-utils";




//URL for accessing OpenWeatherAPI with Query Params 
function Home (){
            // Values stored in state for weather data 

    const [weatherData, setWeatherData]= useState({});
    const [city,setCity]= useState("Orlando"); 
    const [searchParams] = useSearchParams();// https://ultimatecourses.com/blog/query-strings-search-params-react-router


    //Cities: Seoul, Chicago, Orlando, Bogota using react router Query Parameters 
 
    // console.log('city', CityValue)
    // console.log("searchParams", searchParama.get("city"));
    // Query OpenWeatherAPI for weather data 
     // make request to OpenWeather based on a city 

      // makes it so that data doesn't infinetely loop
    useEffect(() => { 
        const cityToQuery = searchParams.get("city")  || city; 
        setCity(cityToQuery);
        axios 
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${cityToQuery}&appid=${WEATHER_APP_API_KEY}&units=imperial`
        )
        .then(function (response) {
              // console.log(response);
            setWeatherData(response.data);
        })
        .catch(function (error){
            console.warn(error);
            setWeatherData({});
        });

    }, []);






    // callback function 
    // equal to undefined or empty object: value || {} humidity no longer undefined


    const { 
        cloudiness, 
        humidity, 
        weatherType,
        currentTemp,
        highTemp,
        lowTemp,
        windSpeed,
        } = useMemo(() => { 

        const weatherMain = weatherData.main || {};   // 
        const weatherClouds= weatherData.clouds || {}; // targetting the clouds section in array 
        

        // restructures return 
        return {
            humidity: weatherMain.humidity,
            cloudiness: weatherClouds.all,
            currentTemp: Math.round(weatherMain.temp),  // this is retrieving the temp from the array, under main
            highTemp:Math.round(weatherMain.temp_max),   // this is retrieving the temp from the array, under main
            lowTemp:Math.round(weatherMain.temp_min),    // this is retrieving the temp from the array, under main
            windSpeed:weatherData.wind && weatherData.wind.speed,
            weatherType: weatherData.weather && weatherData.weather[0].main,

        };

    }, [weatherData]); // dependency array 

     //console.log("state value", weatherData);



    return (
         <div>
            <div style= {{backgroundColor: 'rgba(0,0,0, ${ cloudiness /100})'}}> </div>

             <Header></Header>
             <h1> Weather App</h1>
            <WeatherCard 
            city= {city}
            cloudiness={cloudiness}
            humidity={humidity}
            weatherType={weatherType}
            currentTemp={currentTemp}
            highTemp={highTemp}
            lowTemp={lowTemp}
            windSpeed={windSpeed}
            />
         </div>
        
    );
}

export default Home;