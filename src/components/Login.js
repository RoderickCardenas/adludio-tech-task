import React from 'react'
import { GoogleLogin } from 'react-google-login'

const Login = () => {
  return (
    <div className='loginDiv'>
      <div className='login-content'>
        <img
          className='adludio-logo'
          src='https://bannersforapp.s3.eu-west-2.amazonaws.com/adludio-assets/asset3.png'
          alt=''
        />
        <div className='login-text'>
          <label>Register</label>
        </div>
        <div className='input-div'>
          <span className='login-span'>Full Name</span>
          <input className='login-input' type='text' />
        </div>
        <div className='input-div'>
          <span className='login-span'>E-mail</span>
          <input className='login-input' type='text' />
        </div>
        <div className='input-div'>
          <span className='login-span'>Password</span>
          <input className='login-input' type='password' />
        </div>
        <div className='buttons-container'>
          <div className='register-button-container'>
            <button className='register-button'>REGISTER</button>
          </div>
          <div className='google-button-container'>
            <GoogleLogin className='google-button' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
