import React from 'react'
import logo from "./Facebook_Logo__2019_.svg-removebg-preview.png"
import { Link } from 'react-router-dom'

const Login = () => {
   return (
    <>
    <center>
      <img src={logo} alt="logo" id='imglogin'/><br /><br />

     <div id='fulldiv1'>
     <p id='plogin'>Log in to Facebook</p>

     <input type="email"
     placeholder="    Email address or phone number"
     required /> <br /> <br /> 

     <input  type="password" id='password'
     placeholder="Password"
     required
      /> <br /><br />

      <button id='buttonlogin' >Log in</button> <br />

      <p id='forgot'> Forgotten account?  &nbsp; <Link to="/Newaccount">Sign up for facebook</Link></p>
     </div>
      </center>

      <footer id='footer1'>
      
        <p>English (UK) &nbsp;&nbsp;मराठी &nbsp;&nbsp; हिन्दी  &nbsp;&nbsp;اردو &nbsp;&nbsp; ગુજરાતી &nbsp;&nbsp; ಕನ್ನಡ  &nbsp;&nbsp;ਪੰਜਾਬੀ  &nbsp;&nbsp;தமிழ் &nbsp;&nbsp; বাংলা  &nbsp;&nbsp;తెలుగు &nbsp;&nbsp; മലയാളം &nbsp;&nbsp; <button>+</button></p>
            <hr />
            <p>Sign Up &nbsp;&nbsp; Log In &nbsp;&nbsp; Messenger  &nbsp;&nbsp;Facebook Lite &nbsp;&nbsp;  Video  &nbsp;&nbsp; Places  &nbsp;&nbsp;Games &nbsp;&nbsp; Marketplace  &nbsp;&nbsp;Meta Pay &nbsp;&nbsp;  Meta Store &nbsp;&nbsp; Meta Quest &nbsp;&nbsp;  Imagine with Meta AI</p>
            <p>Instagram &nbsp;&nbsp; Threads  &nbsp;&nbsp;Fundraisers &nbsp;&nbsp;  Services  &nbsp;&nbsp;  Voting Information Centre  &nbsp;&nbsp; Privacy Policy&nbsp;&nbsp;   Privacy Centre &nbsp;&nbsp;  Groups &nbsp;&nbsp;  About&nbsp;&nbsp;  Create ad &nbsp;&nbsp; Create Page</p>
            <p>Developers &nbsp;&nbsp; Careers &nbsp;&nbsp;  Cookies &nbsp;&nbsp;   AdChoices &nbsp;&nbsp; Terms&nbsp;&nbsp;  Help &nbsp;&nbsp;  Contact uploading and non-users</p>
           <br />
           <small>Meta © 2024</small>
        
      </footer>
    </>
   
  )
}


export default Login