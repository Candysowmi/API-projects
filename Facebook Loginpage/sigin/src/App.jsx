import Login from './Login'
import Newacc from './Newacc'
import './App.css'
import { Route,Routes } from 'react-router-dom'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/Newaccount' element={<Newacc/>}></Route>
    </Routes>
    </>
  )
}

export default App
