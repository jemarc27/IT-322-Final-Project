import {Link} from 'react-router-dom'
import {useState} from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import '../Admin/admin-css/Login.css'
import Logo from '../assets/El_Calejon.jpg'

function CustomerLogin(){

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  return(
    <>
      <div className='logIn-page'>
        <div className='logo-row'>
          <img className='admin-logo' src={Logo} alt="" />
        </div>
        <div className="Admin-Login">
          <div className="container">
            <h2 className='Login-Text'>LomiHub</h2>
            <input className="username" type="text" placeholder="Username"/>
            <div className="password-wrapper">
              <input className="password" type={showPassword ? "text" : 'password'} placeholder="Enter Password"/>
              <span onClick={togglePasswordVisibility} className="eye-icon">{showPassword ? <FaEyeSlash/> : <FaEye/>}</span>
            </div>
            <Link to="/Customers-CustomerLogin" className="nav-to-customer">Admin</Link> 
            <Link to="/Customers-LandingPage" className="link"><button className="btn-Login" >Log In</button></Link> 
          </div>  
          <div className='customer-register'>
            <p >Don't have an account? <Link to="/Customers-CustomerSignup"className='account-register'>Sign Up</Link></p>
        </div>  
        </div>
      </div>
    </>
  )
}

export default CustomerLogin