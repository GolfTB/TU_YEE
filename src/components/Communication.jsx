import React from 'react'
import '../styles/communication.css'
import { BiSearch } from 'react-icons/bi'
import NameList from './NameList'
import userImage from '../assets/cat.jpg'


const Communication = () => {
    return (
        <div className="dashboard--content2">
            <div className="sub--header">
                <h2>Communication</h2>
                <div className="search-box">
                    <input type='text' placeholder='Search here...' />
                    <BiSearch className='icon' />
                </div>
            </div>
            <div className='commu-board'>
                <NameList />
                <div className="finder">
                    <h3>Information</h3>
                    <img src={userImage} alt='' /> 
                    <div className="info-detail">ASSOC. PROF. DR. Weerachai Anotaipaiboon</div>
                    <div className="info-detail">anweerac@tu.ac.th</div>
                    <div className="info-detail">09X-XXX-XXXX</div>
                    <div className="info-detail">Campus Building</div>
                </div>
            </div>
        </div>
    )
}

export default Communication