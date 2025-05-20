import React from 'react'
import { PiOrangeBold } from 'react-icons/pi'
import { FaCity } from 'react-icons/fa'
import { GiCommercialAirplane } from 'react-icons/gi'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const Home = () => {
  return (
    <>

      {/* <div className='bg-black w-full h-150 rounded-bl-[200px] mt-1 flex md:flex md:gap-50'>
        <div className='w-120 mt-50 ml-20 h-50 ' >
          <h2 className='text-white font-extrabold text-9xl'>Nagpur</h2>
          <p className='text-white text-2xl pt-7'>The Heart of India</p>
        </div>
        <div className=' '>
          <DotLottieReact className='h-96 mt-30' src='/Hero.lottie' loop autoplay />
        </div>
      </div> */}

      <div className='bg-black w-full h-80 md:h-157 lg:h-150 md:rounded-bl-[200px] lg:rounded-bl-[200px] mt-1 md:flex md:gap-30'>
        <div className='w-full md:w-1/2 md:h-40  md:mt-50'>
          <h2 className='text-white font-extrabold text-4xl md:text-9xl  md:ml-7 pt-7'>Nagpur</h2>
          <p className='text-white text-m md:text-2xl md:pt-5 pt-2 pl-13 font-light lg:pt-5 lg:text-orange-400 md:text-orange-400'>The Heart of India</p>
          <p className='text-white md:ml-13 md:pt-3  pl-10 pt-3 lg:pt-5' >Nagpur is the winter capital and third-largest city of the Indian state of Maharashtra. <br /> It is called the heart of India because of its central geographical location. It is the <br />  largest and most populated city in central India. Also known as the <span className='text-orange-400'>"Orange City"!</span></p>
        </div>

        <div className='md:w-1/2 md:h-96 '>
          <DotLottieReact className='hidden md:block md:h-90 md:w-65 lg:mt-10 lg:w-full  md:mt-15' src='/City.lottie' loop autoplay />
        </div>

      </div>

      <h3 className='md:pt-10 lg:pt-5 lg:pl-10 font-semibold'>Why? <span className='text-orange-400 text-3xl md:pt-20 lg:font-bold  lg:pl-3'>Nagpur </span> is so famous ??</h3>
      <div className='md:h-60 bg-amber-200 pl-10 md:flex lg:flex lg:h-55 lg:rounded-tl-2xl lg:rounded-br-2xl'>
        <p className='lg:pt-10 lg:font-medium'>It is famous for <span className='lg:font-bold lg:text-2xl lg:text-orange-400'>Nagpur oranges</span> and is sometimes known as the Orange City <br /> for being a major trade centre of oranges cultivated in large part of the region. <br /> It is also called the Tiger Capital of India or the Tiger Gateway of India as many tiger reserves <br /> are located in and around the city and also hosts the regional office of National Tiger Conservation Authority. </p>
        <div className='lg:h-100 lg:w-150 '>
          <DotLottieReact className=' hidden md:block md:text-4xl lg:w-[600pX] lg:h-80 lg:pb-20  ' src='/orange.lottie' loop autoplay />
        </div>

      </div>
      <div className='bg-black lg:w-full lg:h-150 md:h-310 lg:rounded-tr-[200px] lg:gap-3 lg:mt-10'>

        <h2 className='lg:text-center lg:font-extrabold lg:text-4xl lg:text-orange-400 lg:pt-5'>Things To Do in Nagpur</h2>
        <div className='lg:flex lg:gap-30 lg:mt-20 lg:w-full lg:pl-20'>

          <div className='lg:w-80 lg:h-110 lg:border md:border-white md:rounded-2xl md:w-70 md:h-90 lg:rounded-2xl  md:ml-20 lg:text-white'>
            <img className='md:w-60 md:h-35 md:ml-5  lg:w-70 lg:h-45 lg:rounded-tl-2xl lg:rounded-tr-2xl lg:text-center lg:m-5' src="/met3.jpg" alt="" />
            <hr />
            <h3 className='lg:text-center lg:pt-3 lg:font-bold lg:text-orange-400 md:text-orange-400 md:text-center md:font-bold'>Majhi Metro</h3>
            <p className='lg:pt-3 lg:m-2 md:text-white md:ml-3 md:font-light'>Nagpur Metro is a rapid transit system of the city which is operated by Maharashtra Metro Rail Corporation Limited (erstwhile Nagpur Metro Rail Corporation Ltd.) and started its operations on 8 March 2019.</p>
          </div>

          <div className='lg:w-80 lg:h-110 md:border md:w-70 md:h-90 md:rounded-2xl lg:border lg:rounded-2xl lg:text-white'>
            <img className='lg:w-70 lg:h-45 md:w-60 md:h-35 md:ml-5  lg:rounded-tl-2xl lg:rounded-tr-2xl lg:text-center lg:m-5' src="/pench.jpg" alt="" />
            <hr />
            <h3 className='lg:text-center lg:pt-3 lg:lg:font-bold md:text-orange-400 lg:text-orange-400 md:text-center md:font-bold'>Pench Tiger Reserve</h3>
            <p className='lg:pt-3 lg:m-2 md:text-white md:ml-3 md:font-light'> Tiger reserves such as Pench Tiger Reserve is situated around 100 km from the city and can be reached through NH44 in Nagpur Jabalpur road.</p>
          </div>
          
          <div className='lg:w-80 lg:h-110  md:border md:rounded-2xl md:w-70 md:h-100 lg:border lg:rounded-2xl lg:text-white '>
            <img className='lg:w-70 lg:h-45 md:w-60 md:h-35 md:ml-5 lg:rounded-tl-2xl lg:rounded-tr-2xl lg:text-center lg:m-5' src="/museum.jpg" alt="" />
            <hr />
            <h3 className='lg:text-center lg:pt-3 lg:font-bold md:text-orange-400 lg:text-orange-400 md:text-center md:font-bold'>Raman Science Centre</h3>
            <p className='lg:pt-3 lg:m-2 md:text-white md:ml-3 md:font-light'>Raman Science Centre is a premium Science Centre of Central India, that has of late become a must see feature on the city's tourist landscape with many scientific experimental edutainment installations.</p>
          </div>
        </div>

      </div>



    </>
  )
}

export default Home