import React from 'react'
import { BiBuilding, BiLogoAndroid, BiLogoHtml5 } from 'react-icons/bi'

const course = [
    {
        title: 'Internship 1',
        icon: <BiLogoHtml5 />,
    },
    {
        title: 'Internship 2',
        duration: '2 Hours',
        icon: <BiLogoAndroid />
    },
    {
        title: 'Internship 3',
        duration: '2 Hours',
        icon: <BiBuilding />,
    },
]

const Card = () => {
  return (
    <div className='card--container'>
        {course.map((item) => (
            <div className="card">
                <div className="card--cover">{item.icon}</div>
                <div className="card--title">
                    <h2>{item.title}</h2>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Card