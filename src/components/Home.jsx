import React from 'react'
import { PiOrangeBold } from 'react-icons/pi'
import City from '/metro.jpg'

const Home = () => {
  return (
    <>
      <div className='w-full h-full bg-black gap-10 justify-between'>
        <div className='bg-blend-darken' style={{
          backgroundImage: `url(${City})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height:"600px"
        }}>
          <div className=''>
            <PiOrangeBold className='text-orange-400' />
          </div>
          <h1 className='text-5xl font-extrabold md:text-center md:ml-100 md:pt-10'>Nagpur the heart of india</h1></div>
      </div>



    </>
  )
}

export default Home