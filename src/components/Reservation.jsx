import React from 'react'
import '../styles/reserve.css'
import music from '../assets/music.jpeg'
import library from '../assets/Library.jpeg'
import Bas from '../assets/Bas.jpeg'
import biglib from '../assets/biglib.jpeg'


const Reservation = () => {
    return (
        <div className='dashboard--content2'>
            <div className="sub--header">
                <h2>Reservation</h2>
            </div>
            <div className="reserve-container">
                <div className="reserve-box">
                    <img src={library} alt='' />
                    <h3>Learning Space</h3>
                </div>
                <div className="reserve-box">
                    <img src={music} alt='' />
                    <h3>Music Studio</h3>
                </div>
                <div className="reserve-box">
                    <img src={Bas} alt='' />
                    <h3>Sports Stadium</h3>
                </div>
            </div>
            <div className="reservation">
                <div className="reserve-learn">
                    <h3>Learning Space</h3>
                    <img src={biglib} alt='' />
                    <div className="reserve-detail">
                        <div>Room : </div>
                        <input className='re-form--size' defaultValue="tutor 10" />
                        <div>Time : </div>
                        <input className='re-form--size' defaultValue="13:00 - 16:00" />
                    </div>
                    <div className="reserve-detail">
                        <div>Person : </div>
                        <input className='re-form--size' defaultValue="3 - 5 persons" />
                        <div>Date : </div>
                        <input className='re-form--size' defaultValue="22/06/2024" />
                    </div>
                    <div className="re-box">
                    <button className='reserve--but'>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reservation