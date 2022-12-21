import React from 'react'

const MidRect = ({ about, interests }) => {
  return (
    <div className='mid-rect'>
      <div>
        <h3>About</h3>
        <p>{about}</p>
      </div>

      <div>
        <h3>Interests</h3>
        <p>{interests}</p>
      </div>
    </div>
  )
}

export default MidRect
