import React from 'react'

const MidRect = ({ about, interests }) => {
  return (
    <div className='mid-rect'>
      <div>
        <h4>about</h4>
        <p>{about}</p>
      </div>

      <div>
        <h4>interests</h4>
        <p>{interests}</p>
      </div>
    </div>
  )
}

export default MidRect
