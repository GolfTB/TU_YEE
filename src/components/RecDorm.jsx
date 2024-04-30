import React from 'react'
import '../styles/dormitory.css'
import { BiSearch } from 'react-icons/bi'
import Newsbox from './Newsbox'

const RecDorm = () => {
  return (
    <div className='dashboard--content2'>
        <div className="sub--header">
                <h2>Recommended Dormitory</h2>
                <div className="search-box">
                    <input type='text' placeholder='Search here...' />
                    <BiSearch className='icon' />
                </div>
        </div>
        <div className="dorm-wrap">
            <Newsbox />
            <Newsbox />
            <Newsbox />
        </div>
    </div>
  )
}

export default RecDorm