import React from 'react'

const TopRect = ({ photo, name, jobTitle, website }) => {
  return (
    <div className='top-rect'>
      <img className='profile-photo' src={photo} alt='photo of me' />
      <h3>{name}</h3>
      <p>{jobTitle}</p>
      <p>{website}</p>
      <div className='btns'>
        <button>Email</button>
        <button>LinkedIn</button>
      </div>
    </div>
  )
}

export default TopRect
