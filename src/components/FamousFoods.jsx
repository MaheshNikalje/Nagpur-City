import React from 'react'
import { IoInformation } from 'react-icons/io5';
import { Link, Links } from 'react-router-dom'
import { MdLocationPin } from "react-icons/md";
import { IoInformationCircleSharp } from "react-icons/io5";
import { TbBackground } from 'react-icons/tb';
import bg from "/background.png"


const FamousFoods = () => {

  const foods = [
    {

      name: 'Tarri Poha',
      image: '/poha-tea.png',
      description: 'Tarri Poha: Nagpur signature breakfast dish, featuring soft flattened rice topped with a spicy chickpea curry, garnished with crunchy sev and fresh onions.',
      location: ' Ramji Shyamji Pohe , Ganesh Nashta,  '
    },
    {
      name: 'Samosas',
      image: '/samosa.png',
      description: 'Samosas: Golden, crispy triangular pastries filled with spiced potatoes and peas, offering a delightful blend of flavors in every bite.',
      location: 'Sai Farsan , Sanjay Samosa , Samosawala'
    },
    {
      name: 'Saoji chicken',
      image: '/Saoji_Chicken.png',
      description: 'Saoji Chicken: A fiery and aromatic chicken curry from Nagpur, renowned for its rich blend of spices and intense heat.',
      // map: 'Ware To Find',
      location: ' Tasty Saoji , Jagdish Bhojanalaya',

    },
    {
      name: 'Santra Barfi',
      image: '/Santra_Barfi.png',
      description: 'Santra Barfi: A creamy, citrus-infused fudge made from Nagpur  famed oranges, offering a sweet and tangy delight unique to the region.',
      location: 'Best place : Haldiram'
    },
    {
      name: 'Patodi and Kadhi',
      image: 'Patodi_and_Kadhi.png',
      description: 'Patodi and Kadhi: A beloved Nagpur delicacy featuring crispy gram flour rolls stuffed with coriander and coconut, served in a tangy buttermilk-based curry.',
      location: 'Zilla Patodi ,Patodiwala Joint'
    },
    {
      name: 'pani puri',
      image: 'pani_puri.png',
      description: 'Pani Puri: A beloved Indian street snack featuring crisp, hollow puris filled with spicy-tangy flavored water, mashed potatoes, and chutneys, delivering a burst of flavors in every bite.',
      location: 'Guptaji pani puri,'
    },
    {
      name: 'matka Biryani',
      image: 'mataka_biryani.png',
      description: 'Matka Biryani: A flavorful biryani slow-cooked in traditional earthen pots, offering a rich and aromatic experience unique to Nagpur',
      location: 'Babbu Biryani ,  Kareem’s Restaurant'

    },
    {
      name: 'Jalebi',
      image: 'Jalebi.png',
      description: 'Jalebi: A golden, crispy, spiral-shaped dessert soaked in fragrant sugar syrup, offering a delightful blend of crunch and sweetness in every bite.',
      location: 'Burhanpur Jalebi Center , Rasbhari Jalebi'
    },
    {
      name: 'Jade Leaf',
      image: '/coffee.png',
      description: 'Jade Leaf By Explosive Flavours: A cozy delivery-only café in Dharampeth, Nagpur, offering a diverse range of artisanal coffees, teas, and indulgent beverages like Nutella and Lotus Biscoff frappes.',
      location: 'Shop 1 & 2, Khare Town, Zone 1, North Ambazari Road, Dharampeth, Nagpur'
    },
    
 
  ];


  return (


    <div className=" min-h-screen  bg-black py-10 px-5 ">
      <div className="relative w-full h-[400px]  bg-cover bg-center" style={{ backgroundImage: "url('/background.png')" }}>
        <div className="absolute  inset-0  bg-opacity-60 flex flex-col items-center justify-baseline text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 ">
            Spice That Hits <span className='text-red-500 animate-pulse '>Different</span>
          </h1>
          <p className="text-lg sm:text-xl text-white mb-5">
            Taste the Fire of Nagpur – Where Spice Meets Soul!
          </p>
        </div>
      </div>

      <h1 className="text-5xl text-white font-bold text-center mb-10 mt-25" ><span className='text-orange-400'>Famous</span> Foods of <span className='text-green-600 animate-pulse '> Nagpur</span></h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">
        {foods.map((food, index) => (
          <div key={index} className="bg-white shadow-gray-300 shadow-xl/35  rounded-2xl overflow-hidden hover:translate-y-2 duration-500 ">
            <img src={food.image} alt={food.name} className="w-full h-48 sm:h-64 object-cover " />
            <div className="p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl text-red-500 font-semibold mb-2 ">{food.name}</h2>

              <div className='flex items-center mb-2'>
                <MdLocationPin className='text-xl sm:text-2xl text-blue-400 mr-2' />
                <h4 className='text-blue-400 text-sm sm:text-base'>{food.location}</h4>
              </div>
              <p className="text-sm sm:text-base text-gray-800">{food.description}</p>





            </div>
          </div>
        ))}
      </div>
    </div>





  );

};

export default FamousFoods;