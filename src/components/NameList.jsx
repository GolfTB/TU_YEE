import React from 'react'
import '../styles/TeacherList.css'
import userImage from '../assets/cat.jpg'

const nameList = [
    {
      name: 'ASSOC. PROF. DR. Weerachai Anotaipaiboon',
      department: 'ECE',
    },
    {
        name: 'ASSOC. PROF. DR. Piya Techateerawat',
        department: 'ECE',
    },
    {
        name: 'ASSOC. PROF. DR. Supakit Prueksaaroon',
        department: 'ECE',
    },
  ]

const NameList = () => {
  return (
    <div>
        <div className="namelist--container">
          {nameList.map((nameList) =>(
          <div className="list2">
            <div className="teacher--detail2">
              <img src={userImage} alt='' /> 
              <h5 className='bar'>{nameList.name}</h5>
              <h5 className='bar'>{nameList.department}</h5>
            </div>
          </div>
          ))}
        </div>
    </div>
  )
}

export default NameList