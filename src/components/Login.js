import React from 'react'
import { GoogleLogin } from 'react-google-login'

const Login = () => {
  return (
    <div className='loginDiv'>
      <img
        className='adludio-logo'
        src='https://bannersforapp.s3.eu-west-2.amazonaws.com/adludio-assets/asset3.png'
        alt=''
      />
      <h3>Register</h3>
      <label className='login-label'>Full Name</label>
      <input className='login-input' type='text' />
      <label className='login-label'>E-mail</label>
      <input className='login-input' type='text' />
      <label className='login-label'>Password</label>
      <input className='login-input' type='password' />
      <button className='register-button'>REGISTER</button>
      <GoogleLogin className='google-button' />
    </div>
  )
}

export default Login
