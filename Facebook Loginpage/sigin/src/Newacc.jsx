import React from 'react'
import logo from "./Facebook_Logo__2019_.svg-removebg-preview.png"
import { Link } from 'react-router-dom'

const Newacc = () => {
  return (
    <>
   
    <img src={logo} alt="logo" id='imgsign1'/><br /> <br />

    <div id='Fulldiv2'>
      <div id='pa1'>
    <p id='psign1'>Create a new account</p>
    <p id='psign2'>it's quick and easy.</p>
    </div>
    <hr />
  
    <div id='input'>
    <input type="text"
    placeholder='First name'
    required />  &nbsp;&nbsp; 

    <input type="text"
    placeholder='Surename'
    required /> <br /> <br />
    
    <input type="number" 
    placeholder='Mobile number or email address'
    required/> <br /> <br />

    <input type="password"
    placeholder='New password' 
    required />
     </div>
    
            
    <div class="birthday">Date of brith❔</div>
    <li class="listA" >


    <select title ="Day"  >
    <option value="0" selected="1">Day</option>
    <option value="1">1</option>     <option value="2">2</option>     <option value="3">3</option>    <option value="4">4</option>
    <option value="5">5</option>     <option value="6">6</option>     <option value="7">7</option>    <option value="8">8</option>
    <option value="9">9</option>     <option value="10">10</option>   <option value="11">11</option>  <option value="12">12</option>
    <option value="13">13</option>   <option value="14">14</option>   <option value="15">15</option>  <option value="16">16</option> 
    <option value="17">17</option>   <option value="18">18</option>   <option value="19">19</option>  <option value="20">20</option>
    <option value="21">21</option>   <option value="22">22</option>   <option value="23">23</option>  <option value="24">24</option>
    <option value="25">25</option>   <option value="26">26</option>   <option value="27">27</option>  <option value="28">28</option>
    <option value="29">29</option>   <option value="30">30</option>   <option value="31">31</option>
    </select>   &nbsp;           
    


                    
    <select title ="Month"><option value="0" selected="1">Month</option>
                        <option value="1">Jan</option>  <option value="2">Feb</option>   <option value="3">Mar</option>
                        <option value="4">Apr</option>  <option value="5">May</option>   <option value="6">Jun</option>
                        <option value="7">Jul</option>  <option value="8">Aug</option>   <option value="9">Sep</option>
                        <option value="10">Oct</option> <option value="11">Nov</option>   <option value="12">Dec</option>
    </select> &nbsp;

   
    <select title="Year"><option value="0" selected="1">Year</option>
    <option value="2020">2020</option><option value="2019">2019</option><option value="2018">2018</option><option value="2017">2017</option>
    <option value="2016">2016</option><option value="2015">2015</option><option value="2014">2014</option><option value="2013">2013</option>
    <option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option>
    <option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option>
    <option value="2004">2004</option><option value="2003">2003</option><option value="2002">2002</option><option value="2001">2001</option>
    <option value="2000">2000</option><option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option>
    <option value="1996">1996</option><option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option>
    <option value="1992">1992</option><option value="1991">1991</option><option value="1990">1990</option><option value="1990">1989</option>
    </select>

    </li>

     <div class="gender">Gender❔</div>
                <li class="listB">
                  <button id='radio'>
                <label >Female</label>&nbsp;&nbsp;
                <input type="radio"  name="gender" /></button>&nbsp;&nbsp;&nbsp;&nbsp;
               <button id='radio'>
                <label>Male</label>&nbsp;&nbsp;
               <input type="radio" name="gender" /></button>&nbsp;&nbsp;&nbsp;&nbsp;
               <button id='radio'>
               <label >Custom</label>&nbsp;&nbsp;
               <input type="radio" name="gender" /></button>
     </li>
    
     <p id='psign3'>people who use our service may have uploaded your contact information to <br />Facebook <a>Learn more.</a></p>
     <p id='psign4'>By clicking Sign Up,you agree to our <a>Terms,Privacy Policy </a> and <a>Cookies Policy.</a> <br /> You may receive SMS notifications from us and can opt out at any time.</p>
  

     <button id='button1'>Sign Up</button>
     <p id='psign5'><Link to="/">Already have an account?</Link></p> <br />
     </div><br /><br /><br /> <br /><br />
     <footer id='footer2'>
      
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

export default Newacc