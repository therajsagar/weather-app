import React from 'react';

function Weather(props){
       if(props.status){
        return(
            <div>
                <p><span>Location:</span> {props.city},  {props.country}</p>
                <p><span>Weather: </span>{props.description}</p>
                <p><span>Temperature: </span>{props.temperature}<sup>o</sup></p>
                <p><span>Humidity: </span>{props.humidity}%</p>
                <p><span>Windspeed: </span>{props.windspeed} m/s</p>
                <p><span>Clouds: </span>{props.cloud}%</p>
            </div>
        )}
        else{
           return( <div><h2>{props.error}</h2></div>)
        }
}

export default Weather;
