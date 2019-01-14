import React from 'react';

function Weather(props){
    
        return(
            <div>
                {props.city && <p><span>Location:</span> {props.city},  {props.country}</p>}
                {props.description && <p><span>Weather Type: </span>{props.description}</p>}
                {props.temperature && <p><span>Temperature: </span>{props.temperature}<sup>o</sup></p>}
                {props.humidity && <p><span>Humidity: </span>{props.humidity}%</p>}
                {props.windspeed && <p><span>Windspeed: </span>{props.windspeed} m/s</p>}
                {props.cloud && <p><span>Clouds: </span>{props.cloud}%</p>}
                {props.error && <p><h2>{props.error}</h2></p>}
            </div>
        )
}

export default Weather;
