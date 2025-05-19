import React from 'react'
import { PiOrangeBold } from 'react-icons/pi'
import City from '/metroo.jpg'
import { FaCity } from 'react-icons/fa'
import { GiCommercialAirplane } from 'react-icons/gi'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const Home = () => {
  return (
    <>

      <div className='bg-black w-full h-150 rounded-bl-[200px] mt-1 flex md:flex'>
        <div >
          <h2 className='text-orange-400 text-2xl '><span className='text-white text-9xl font-bold'>Nagpur</span> <span className='ml-10 mt-10'>The Heart of India</span></h2>
          <p className='text-white font-light pl-20  overflow-auto pt-10'>Nagpur  is the winter capital and third-largest city of the Indian state of Maharashtra. <br /> It is called the heart of India because of its central geographical location. <br /> Also known as the "Orange City", Nagpur is the 13th largest city in India by population.</p>
        </div>
        <div className='md:flex'>

          <DotLottieReact className='' src='/Hero.lottie' loop autoplay />

        </div>

      </div>
      <div className='h-100 pt-10 pl-10'>
        <h3>Why? <span className='text-orange-400 text-3xl'>Nagpur</span> is so famous</h3>
        <p className='pt-10'>It is famous for Nagpur oranges and is sometimes known as the Orange City for being a major trade centre of oranges cultivated in large part of the region. It is also called the Tiger Capital of India or the Tiger Gateway of India as many tiger reserves are located in and around the city and also hosts the regional office of National Tiger Conservation Authority. The city was founded in 1702 by the Gond King Bakht Buland Shah of Deogarh and later became a part of the Maratha Empire under the royal Bhonsale dynasty. The British East India Company took over Nagpur in the 19th century and made it the capital of the Central Provinces and Berar. After the first re-organisation of states, the city lost its status as the capital. Following the informal Nagpur Pact between political leaders, it was made the second capital of Maharashtra.</p>


      </div>
      <div className='bg-black w-full h-150 rounded-tr-[200px] mt-1 gap-3'>
        <h2 className='text-center font-extrabold text-4xl text-orange-400 pt-5'>Things To Do in Nagpur</h2>
        <div className='flex gap-30 mt-20 ml-20'>
          <div className='w-80 h-110 border rounded-2xl text-white'>
            <img className='w-70 h-45 rounded-tl-2xl rounded-tr-2xl text-center m-5' src="public/met3.jpg" alt="" />
            <hr />
            <h3 className='text-center pt-3 font-bold text-orange-400'>Majhi Metro</h3>
            <p className='pt-3 m-2'>Nagpur Metro is a rapid transit system of the city which is operated by Maharashtra Metro Rail Corporation Limited (erstwhile Nagpur Metro Rail Corporation Ltd.) and started its operations on 8 March 2019.</p>
          </div>
          <div className='w-80 h-110 border rounded-2xl text-white'>
            <img className='w-70 h-45 rounded-tl-2xl rounded-tr-2xl text-center m-5' src="src/components/pench.jpg" alt="" />
            <hr />
            <h3 className='text-center pt-3 font-bold text-orange-400'>Pench Tiger Reserve</h3>
            <p className='pt-3 m-2'> Tiger reserves such as Pench Tiger Reserve is situated around 100 km from the city and can be reached through NH44 in Nagpur Jabalpur road.</p>
          </div>
          <div className='w-80 h-110 border rounded-2xl text-white'>
            <img className='w-70 h-45 rounded-tl-2xl rounded-tr-2xl text-center m-5' src="src/components/museum.jpg" alt="" />
            <hr />
            <h3 className='text-center pt-3 font-bold text-orange-400'>Raman Science Centre</h3>
            <p className='pt-3 m-2'>Raman Science Centre is a premium Science Centre of Central India, that has of late become a must see feature on the city's tourist landscape with many scientific experimental edutainment installations.</p>
          </div>
        </div>

      </div>



    </>
  )
}

export default Home