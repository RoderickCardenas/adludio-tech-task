import React from 'react'
import './App.css'
import ImageDiv from './components/imageDiv'
import Login from './components/Login'

const App = () => {
  return (
    <section className='container'>
      <div className='login-container'>
        <ImageDiv />
        <Login />
      </div>
    </section>
  )
}

export default App
