import React, { useState }  from 'react'
import Axios from 'axios'
import './App.css'

const APIkey ='9d77c807185d9909525a38aee340220a';

const App = () => {
  const [city,setCity]= useState("");
  const [data,setData] = useState();
  const clear=()=>{
    setCity("");
    setData("");
  }

  const feachdata = async () =>{
    try{
         const response = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`);
         setData(response);
        //  console.log(response)
    }
    catch(err){
      alert('Please Enter the city name ');

    }
  }
  return (
    <>
    <div className='all'>
      <h1>Weather app</h1>
    <div className='input'>
      <input type="text"
      value={city}
      placeholder='Enter a city name....' 
      onChange={e=>setCity(e.target.value)}/> <br /> <br />
      <button className='click' onClick={feachdata}>Click</button> 
      <button className='clear' onClick={clear}>Clear</button>
    </div>
    <div>
      {data && (
        <div className='container'>
          <p className='country'>{data.name},{data.sys.country}</p>
          <div className='weather infor'>
          <div><p className='temp'>Temp - {Math.round(data.main.temp)} C</p></div>
          <div><p className='feels'> Feels_like - {data.main.feels_like}</p></div> 
           
          
          <div>
            <div><p className='lat'>Lat - {data.coord.lat}</p></div>
            <div><p className='lon'>Lon - {data.coord.lon}</p></div>
            
          </div>
          </div>
          </div>
        
      )
      }
    </div>

    </div>
    </>
  )
}

export default App
