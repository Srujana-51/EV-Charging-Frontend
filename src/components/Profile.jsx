import React from 'react'
import '../styles/Profile.css'

const Profile = () => {
  return (
    <div className='profile-container'>
      <div className='charge-it'><p>CHARGE IT</p></div>
      <div className='user-profile'>
        <p className='profile'></p>
        <h3 className='user-id'>User ID</h3>
      </div>
      <div className='over-view'>
        <h3>Over view</h3>
      </div>
    </div>
  )
}
export default Profile
