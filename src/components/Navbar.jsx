import React from 'react'
import { FaCity } from 'react-icons/fa'
import { PiAirplane, PiOrangeDuotone, PiOrangeFill } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='bg-black text-white h-25 pt-5 flex gap-10'>
        <div className='text-[35px] mt-3 ml-10 flex gap-5'>< FaCity />
          < PiAirplane />
        </div>
        <h1 className='text-center font-extrabold text-[40px]'> Nagpur </h1>
        <div className='flex justify-center ml-220 gap-10 mt-5 font-medium'>
          <Link to="/" >
            HOME
          </Link>
          <Link to="/spots">
            SPOTS
          </Link>
          <Link to="/foods">
            FOODS
          </Link>
        </div>

      </div>

    </>
  )
}

export default Navbar