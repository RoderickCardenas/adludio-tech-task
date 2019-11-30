import React from 'react'
import './App.css'
// import ImageDiv from './components/imageDiv'
import Login from './components/Login'

const App = () => {
  return (
    <section className='container'>
      <div className='text'>
        <div className='inner-text'>
          <h1 className='imageDiv-text'>REDIFINING MOBILE ADVERTISING</h1>
          <div className='imageDiv-p-text'>
            <p>Please use this form to register.</p>
            <p>
              If you are a member, please <a href='url'>login</a>.
            </p>
          </div>
        </div>
      </div>
      {/* <ImageDiv /> */}
      <Login />
    </section>
  )
}

export default App
