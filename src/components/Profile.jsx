import React from 'react'
import '../styles/profile.css'
import ProfileHeader from './ProfileHeader'
import userImage from '../assets/cat.jpg'
import classImage from '../assets/class.png'
import Content from './Content'
import ajjack from '../assets/ajjack.jpg'

const Profile = () => {
  return (
    <div className="dashboard--content">
      <div className="profile">
        <ProfileHeader />

        <div className="user--profile">
          <div className="user--detail">
            <img src={userImage} alt='' />
            <h3 className="username">6510742XXX</h3>
            <span className="profession">Student ID</span>
          </div>

          <div className="user--container">
            <div className="course">
              <h4 className="title">Thitichaya Pounglaowech</h4>
            </div>

            <div className="course">
              <div className="user--container-2">
                <h4 className="title">Software Engineering</h4>
                <h4 className="duration">Faculty of Engineering</h4>
              </div></div>

            <div className="user--container-2">
              <div className="course">
                <img src={ajjack} alt='' />
                <div className="user-courses">
                  <h4 className="title">Advisor.xxxx xxxxxxx</h4>
                  <h1 className="duration">Office room : xxx</h1>
                </div>
              </div>
            </div>

            <div className="user--container-2">
              <div className="course">
                <h4 className="title">GPA : 3.47</h4>
                <h4 className="title">Credit : 54</h4>
              </div>
            </div>

          </div>

        </div>

        <div className="classbox">
          <div className='user--profile-2'>
            <img src={classImage} alt='' />
          </div>

          <div className="user--container-2">
            <div className="buttonflex">
              <button>Add</button></div>
            <div className="buttonflex">
              <button>Drop</button></div>
          </div>
        </div>
      </div>
      <Content />
    </div>
  )
}

export default Profile