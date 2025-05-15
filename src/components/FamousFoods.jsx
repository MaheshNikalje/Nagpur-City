import React from 'react'
import { Link, Links } from 'react-router-dom'

const FamousFoods = () => {
  return (

    <div className="relative h-100 w-200 bg-cover bg-center ml-50 rounded-4xl" style={{ backgroundImage: "url('/poha-tea.png')" }}>
      {/* Optional semi-transparent overlay for better text readability */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

      {/* Content over the background image */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-white text-center px-4">
          <h1 className="text-4xl font-bold mb-4">Famous Foods of Nagpur</h1>
          <p className="text-lg">Experience the authentic taste of Poha and Tea</p>
        </div>
      </div>
      <div className='mt-20 text-3xl'>
        <h1>1.Samosas</h1>
        <div >
          <img src="/samosa.png" alt="" />

        </div>

      
      </div>
    </div>
    
  );
};


   
  



export default FamousFoods