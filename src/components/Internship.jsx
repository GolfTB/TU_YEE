import React from 'react'
import Card from './Card'
import Newsbox from './Newsbox'
import '../styles/internship.css'

const Internship = () => {
  return (
    <div>
      <div className="dashboard--content2">
        <div className="sub--header">
          <h2>Internship</h2>
        </div>
        <Card />
        <Newsbox />
        <Newsbox />
        <Newsbox />
      </div>
    </div>
  )
}

export default Internship