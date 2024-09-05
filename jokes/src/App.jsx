import React from 'react'
import axios, { Axios } from 'axios'
import './App.css'
import { useState } from 'react'

const App = () => {
  const[value,setvalue]=useState("");
  const[value1,setvalue1]=useState("HELLO EVERYONE. . .WELCOME TO RANDOM JOKE GENERATOR. . . GET READY TO LAUGHS😃. . .  ENJOY YOUR JOKES. . . .");
  
  const jokes=()=>{
    axios.get('https://api.chucknorris.io/jokes/random').then(response=>{
      console.log(response);
      setvalue(response.data.value);
      setvalue1("");
    })
    .catch(error=>{
      console.log(error);
      alert("something went wrong");
    })
   }
  return (
    <div className='id'>
      <h1>Random Joke Generator</h1><hr />
     
      <h3> <p>{value1}</p>{value}</h3>
      <button onClick={jokes}>Get New Jokes</button>
    </div>
  )
}

export default App