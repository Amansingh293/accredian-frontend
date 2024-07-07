import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row justify-around items-center gap-3 w-full p-4'>
        <div className='flex justify-center items-center gap-5'>
        <img src='images/logo.png' alt="" className='w-[7rem]'/>
        <Button className={"p-2 rounded-lg shadow-lg bg-[#1A73E8] text-white"} text={"Courses"} />
        </div>


        <div className='grid grid-cols-3 md:grid-cols-5 justify-center items-center gap-5'>
            <div className=''>Refer & Earn</div>
            <div className=''>Refer & Earn</div>
            <div className=''>Refer & Earn</div>
            <Button className={"bg-gray-300 rounded-lg shadow-lg p-2"} text={"Login"}/>
            <Button className={"bg-[#1A73E8] rounded-lg shadow-lg p-2"} text={"Try For Free"}/>
        </div>
    </div>
  )
}

export default Navbar