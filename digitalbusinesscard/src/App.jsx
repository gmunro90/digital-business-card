import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TopRect from './components/TopRect'
import MidRect from './components/MidRect'
import Footer  from './components/Footer'
import greg from './greg.jpg'

function App() {
  return (
    <div className='App'>
      <div className='card-container'>
      <div className='card-wrapper'>
        <TopRect photo={greg} name={'Greg Munro'} jobTitle={'Frontend Developer'} website={'greg-munro.com'}/>
        <MidRect />
        <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
