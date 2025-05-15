import React from 'react'
import { PiOrangeBold } from 'react-icons/pi'

const Home = () => {
  return (
    <>
      <div className='bg-black h-110 mt-10 flex'>
        <img className='w-270 h-100 pt-7 pl-10' src="src/components/metro.jpg" alt="" />
        
        <p className=' pt-10 pl-10 font-bold text-white'><span className=' font-extrabold pl-7 text-[35px]'>Nagpur</span> is the winter capital and third-largest city of the Indian state of Maharashtra. It is called the <span className='font-bold'>HEART OF INDIA</span> because of its central geographical location. <br /> It is the largest and most populated city in central India. Also known as the 
        <div className='flex gap-1'> 
          <h2 className='text-orange-500 font-extrabold text-[33px] h-15 mt-5 '>Orange City</h2>
          <div className='pt-1 text-orange-500 text-[50px] pt-3 h-10 mt-3'> <PiOrangeBold/></div>   
        </div>
         <span className='mt-20'>Nagpur is the 13th largest city in India by population.According to an Oxford's Economics report, Nagpur is projected to be the fifth fastest growing city in the world from 2019 to 2035 with an average growth of 8.41%. It has been proposed as one of the <br /> Smart Cities  in Maharashtra and is one of the top ten cities in India in Smart City Project execution.</span> </p>
      </div>

      <div className='bg-black text-white mt-11 h-15'>
        <h2><span className='text-[30px] font-extrabold pl-3 pt-2'>Nagpur...</span> <span className=' text-[20px] font-bold pl-5'>is famous for ???</span></h2>
      </div>
      <div className='bg-black text-white mt-10'>
        <p className='pl-10'>It is famous for Nagpur oranges and is sometimes known as the Orange City for being a major trade centre of oranges cultivated in large part of the region. <br /> It is also called the Tiger Capital of India or the Tiger Gateway of India as many tiger reserves are located in and around the city and also hosts the regional office of National Tiger Conservation Authority. <br /> The city was founded in 1702 by the Gond King Bakht Buland Shah of Deogarh[38] and later became a part of the Maratha Empire under the royal Bhonsale dynasty. <br /> The British East India Company took over Nagpur in the 19th century and made it the capital of the Central Provinces and Berar. <br /> After the first re-organisation of states, the city lost its status as the capital. Following the informal Nagpur Pact between political leaders, it was made the second capital of Maharashtra.</p>
      </div>

    </>
  )
}

export default Home