import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

const BackBotton = ({destination = '/'}) => {
  return (
    <div className='flex'>
        <Link 
            to= {destination}
            className='bg-sky-800 text-white px-4 rounded-lg w-fit'
        ></Link>
        <BsArrowLeft className='text-2xl'></BsArrowLeft>
    </div>
  )
}

export default BackBotton
