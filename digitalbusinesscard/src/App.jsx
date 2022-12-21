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

      <div className='card-wrapper'>
        <TopRect photo={greg} name={'Greg Munro'} jobTitle={'Frontend Developer'} website={'greg-munro.com'}/>
        <MidRect about={'testing the about section'} interests={'testing the interests section'}/>
        <Footer />
        </div>
      </div>

  )
}

export default App
