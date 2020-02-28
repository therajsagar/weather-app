import React from 'react';
import Title from './components/Title.jsx'
import Form from './components/Form.jsx';
import Weather from './components/Weather.jsx';
import './App.css';

const key = 'xxxx';

class  App  extends React.Component{

    constructor(){
        super()
        this.state =  {
            temperature :  null,
            city : null,
            country  : null,
            humidity  : null,
            description  : null,
            windspeed : null,
            cloud: null,
            error : null,
            status: 0
        }
    }


    getData = async (event) =>{
        event.preventDefault();

        const city = event.target.elements.city.value;

        const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);

        const data = await api.json();

        const status = data.message;

        console.log(data);

        if(city && data.cod===200){
            this.setState ({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].main+` (${data.weather[0].description})`,
                windspeed: data.wind.speed,
                cloud : data.clouds.all,
                error: null,
                status:1
              })}
            else{
                this.setState( {
                    temperature :  null,
                    city : null,
                    country  : null,
                    humidity  : null,
                    description  : null,
                    windspeed : null,
                    cloud: null,
                    status:0,
                    error :  status.toLocaleUpperCase()

                })
            }
        }
    

    render(){
        return(
            <div><Title/>
            <Form getData={this.getData}/>
            <Weather  temperature ={this.state.temperature}
            city = {this.state.city}
            country  = {this.state.country}
            humidity   = {this.state.humidity}
            description = {this.state.description}
            windspeed = {this.state.windspeed}
            cloud = {this.state.cloud}
            error ={this.state.error} 
            status = {this.state.status}/>
            </div>
        )
    }
}

export default App;
