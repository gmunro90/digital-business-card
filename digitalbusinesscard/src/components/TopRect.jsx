import React from 'react'


const TopRect = ({ photo, name, jobTitle, website }) => {
  return (
    <div className='top-rect'>
      <img className='profile-photo' src={photo} alt='photo of me' />
      <h2>{name}</h2>
      <h3>{jobTitle}</h3>
      <h4>{website}</h4>
      <button>Email</button>
      <button>LinkedIn</button>
    </div>
  )
}

export default TopRect
