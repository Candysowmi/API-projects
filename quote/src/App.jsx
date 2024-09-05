import React from 'react'
import axios from 'axios'
import './App.css'
import { useState } from 'react'


const App = () => {

  const[content,setContent]= useState("");
  const[author,setauthor]= useState("")
  // const[]

   const quote=()=>{
    axios.get('http://api.quotable.io/random').then(response =>{
      console.log(response)
      setContent(response.data.content);
      setauthor(response.data.author)

    })
    .catch(error => {
      console.log(error)
    })
   }
  return (
    <div>
      <h1>Quote of the day<hr /></h1> 
      <h3>{content}</h3>
      <h6>-{author}</h6>
      <button onClick={quote}>Display New Quote!</button>

    </div>
  )
}

export default App