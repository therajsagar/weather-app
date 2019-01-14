import React from 'react';

class Weather extends React.Component{
    render(){
        return(
            <div>
                {this.props.city && <p>Location: {this.props.city},  {this.props.country}</p>}
                {this.props.description && <p>Weather Type: {this.props.description}</p>}
                {this.props.temperature && <p>Temperature: {this.props.temperature}<sup>o</sup></p>}
                {this.props.humidity && <p>Humidity: {this.props.humidity}%</p>}
                {this.props.windspeed && <p>Windspeed: {this.props.windspeed} m/s</p>}
                {this.props.cloud && <p>Clouds: {this.props.cloud}%</p>}
                {this.props.error && <p>{this.props.error}</p>}
            </div>
        )
    }
}

export default Weather;
