import React from 'react'

const TopRect = ({ photo, name, jobTitle, website }) => {
  return (
    <div className='top-rect'>
      <img className='profile-photo' src={photo} alt='photo of me' />
      <p className='info'>
        <span className='name'>{name}</span>
        <span className='title'>{jobTitle}</span>
        <span className='website'>{website}</span>
      </p>

      <div className='btns'>
        <button className='email'>Email</button>
        <button className='linked-in'>LinkedIn</button>
      </div>
    </div>
  )
}

export default TopRect
