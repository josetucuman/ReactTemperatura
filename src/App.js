import React, { Component } from 'react'
import TempInfo from './components/TempInfo'
import FormTiempo from './components/FormTiempo'
import {CLAVE_TEMP} from './keys.js'


export default class App extends Component {

  state ={
    temperatura : '',
    descripcion: '',
    temp_max: '',
    temp_min:'',
    humedad: '',
    velocidad_viento: '',
    presion:'',
    ciudad: '',
    pais: '',
    error: null
    
  }

  tomarTemperatura = async e =>{
    e.preventDefault()
    const {ciudad, pais} = e.target.elements
    const ciudadValor = ciudad.value
    const paisValor = pais.value
    const API_TEMP = `https://api.openweathermap.org/data/2.5/weather?q=${ciudadValor},${paisValor}&appid=${CLAVE_TEMP}&units=metric`
    
    const response = await fetch(API_TEMP);
    const data = await response.json();
    
    this.setState({
    temperatura : data.main.temp,
    descripcion: data.weather[0].description,
    humedad: data.main.humidity,
    temp_max: data.main.temp_max,
    temp_min: data.main.temp_min,
    velocidad_viento: data.wind.speed,
    presion: data.main.pressure,
    ciudad: data.name,
    pais: data.sys.country,
    error: null
    })
    
    
    
    
  }
  render() {
    return (
      <div className ="container p-4">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <FormTiempo tomarTemperatura={this.tomarTemperatura} />
            
          </div>
          <div className="col-md-8 mx-auto">
           
            <TempInfo {...this.state} />
          </div>
       </div>
      </div>
    )
  }
}

