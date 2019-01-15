import React from 'react';

function Weather(props){
       if(props.status){
        return(
            <div className='result'>
            <ul >
                <li><span className="key">LOCATION</span> : <span className="value"> {props.city},  {props.country}</span></li>
                <li><span className="key">WEATHER</span> : <span className="value"> {props.description}</span></li>
                <li><span className="key">TEMPERATURE</span> : <span className="value"> {props.temperature}<sup>o</sup>C</span></li>
                <li><span className="key">HUMIDITY</span> : <span className="value"> {props.humidity}%</span></li>
                <li><span className="key">WINDSPEED</span> : <span className="value"> {props.windspeed} m/s</span></li>
                <li><span className="key">CLOUDINESS</span> : <span className="value"> {props.cloud}%</span></li>
                </ul>
            </div>
        )}
        else{
           return( <div className='result'><h2>{props.error}</h2></div>)
        }
}

export default Weather;
