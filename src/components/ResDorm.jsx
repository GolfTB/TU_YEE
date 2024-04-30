import React from 'react'
import '../styles/dormitory.css'
import cat from '../assets/cat.jpg'

const ResDorm = () => {
  return (
    <div className='dashboard--content2'>
        <div className="sub--header">
                <h2>Reservation Dormitory</h2>
        </div>
        <div className="reservation">
                <div className="reserve-learn">
                    <h3>Reserve Dormitory</h3>
                    <img src={cat} alt='' />
                    <div className="reserve-detail">
                        <div>Zone : </div>
                        <input className='re-form--size' defaultValue="B" />
                    </div>
                    <div className="reserve-detail">
                        <div>Person : </div>
                        <input className='re-form--size' defaultValue="2 persons" />
                    </div>
                    <div className="re-box">
                    <button className='reserve--but'>Search</button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ResDorm