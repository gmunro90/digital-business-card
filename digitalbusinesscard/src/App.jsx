import './App.css'
import TopRect from './components/TopRect'
import MidRect from './components/MidRect'
import Footer from './components/Footer'
import greg from './greg.jpg'

function App() {
  return (
    <div className='App'>
      <div className='card-container'>
        <div className='top'>
          <TopRect
            photo={greg}
            name={'Greg Munro'}
            jobTitle={'Frontend Developer'}
            website={'greg-munro.com'}
          />
        </div>

        <div className='middle'>
          <MidRect
            about={
              'I am a frontend developer with a particular interest in React but love vanilla JS too. '
            }
            interests={
              'Cooking, Running, Tennis, Music, not in that order. Also I like Newton sometimes.'
            }
          />
        </div>

        <div className='bottom'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
