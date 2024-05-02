import React from 'react'
import '../styles/TeacherList.css'
import ajjack from '../assets/ajjack.jpg'
import ajpiya from '../assets/ajpiya.png'
import ajpao from '../assets/ajpao.jpg'
const nameList = [
    {
      name: 'ASSOC. PROF. DR. Weerachai Anotaipaiboon',
      department: 'ECE',
      img: ajjack,
    },
    {
      name: 'ASSOC. PROF. DR. Piya Techateerawat',
      department: 'ECE',
      img: ajpiya,

    },
    {
      name: 'ASSOC. PROF. DR. Supakit Prueksaaroon',
      department: 'ECE',
      img: ajpao,
    },
  ]

const NameList = () => {
  return (
    <div>
        <div className="namelist--container">
          {nameList.map((nameList) =>(
          <div className="list2">
            <div className="teacher--detail2">
              <img src={nameList.img} alt='' /> 
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