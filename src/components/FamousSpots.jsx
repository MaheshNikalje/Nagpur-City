import React from 'react'

const FamousSpots = () => {
  return (
    <div className='bg-gradient-to-br from-black to-gray-900 text-white min-h-screen p-6'>
      <h1 className='text-3xl font-bold text-center mb-10 underline'>Famous Religious Spots in Nagpur</h1>

      {/* Spot Card */}
      {[
        {
          title: 'Deekshabhoomi',
          image: '/deekshabhoomi.png',
          description: 'Deekshabhoomi is the sacred monument where Dr. B.R. Ambedkar converted to Buddhism along with over 600,000 followers on 14th October 1956. It marked a major social and spiritual movement in India known as the Dalit Buddhist Movement.',
          location: ['City: Nagpur, Maharashtra', 'Area: Near Ramdaspeth, close to the main city center', 'Easily accessible by road and rail'],
          hours: ['Open: 6:00 AM to 9:00 PM (daily)', 'Best time to visit: Early morning or evening for a peaceful experience.'],
          specialDays: ['Dhamma Chakra Pravartan Din (14 October)', 'A major annual festival commemorating Ambedkar’s conversion.', 'Millions of followers visit Deekshabhoomi on this day.', 'Expect large crowds and special cultural events.'],
          tips: ['No entry fee', 'Shoes must be removed before entering the Stupa', 'Photography is allowed but be respectful', 'Quiet and respectful behavior is appreciated inside', 'Ideal for spiritual seekers, history enthusiasts, and architecture lovers'],
        },
        {
          title: 'Taj Bagh Dargah (Taj Baba Dargah)',
          image: '/tajbagh.jpeg',
          description: 'Taj Bagh Dargah is a revered Sufi shrine dedicated to the Sufi saint Hazrat Baba Tajuddin Aulia. It is a major spiritual destination in Nagpur, drawing devotees from all religions who come to seek blessings and peace.',
          location: ['City: Nagpur, Maharashtra', 'Area: Taj Bagh, near Central Jail Road', 'Accessible by autos, buses, and private vehicles'],
          hours: ['Open: 5:00 AM to 10:00 PM (daily)', 'Best time to visit: Evening for a peaceful spiritual atmosphere and Sufi music'],
          specialDays: ['Urs Festival (death anniversary of the saint)', 'Attracts thousands of pilgrims and spiritual seekers', 'Includes Qawwali performances, food distribution, and prayers'],
          tips: ['Modest dress is recommended', 'Remove shoes before entering the Dargah', 'Respect local customs and avoid loud behavior', 'Take care of your belongings during crowded events'],
        },
        {
          title: 'Koradi Temple',
          image: '/koraditemple.jpg',
          description: 'Koradi Temple is a famous Hindu temple dedicated to Goddess Mahalaxmi Devi. It is one of the prominent Shakti temples near Nagpur and attracts thousands of devotees, especially during the Navratri festival.',
          location: ['City: Nagpur, Maharashtra', 'Area: Koradi Road, about 15 km from city center', 'Accessible by buses, autos, and private vehicles'],
          hours: ['Open: 5:00 AM to 10:00 PM (daily)', 'Best time to visit: Early morning or during festive season'],
          specialDays: ['Navratri Festival (March–April and September–October)', 'Thousands of devotees gather for prayers and rituals', 'Decorated with lights, music, and devotional programs'],
          tips: ['Carry offerings like coconut and flowers if you wish to perform pooja', 'Shoes must be removed before entering temple premises', 'Respect temple rules and maintain cleanliness', 'Stay hydrated, especially during summer visits'],
        },
      ].map((spot, index) => (
        <div key={index} className='bg-white text-black rounded-2xl shadow-xl p-6 mb-12 max-w-4xl mx-auto'>
          <h2 className='text-2xl font-bold mb-3'>{index + 1}. {spot.title}</h2>
          <img src={spot.image} alt={spot.title} className='w-full h-64 object-cover rounded-xl mb-4 border border-gray-300' />
          <h3 className='text-xl font-semibold mb-2'>What is {spot.title}?</h3>
          <p className='mb-4'>{spot.description}</p>

          <h4 className='font-semibold text-lg mb-1'>Location</h4>
          <ul className='list-disc pl-6 mb-4 text-sm'>
            {spot.location.map((item, i) => <li key={i}>{item}</li>)}
          </ul>

          <h4 className='font-semibold text-lg mb-1'>Visiting Hours</h4>
          <ul className='list-disc pl-6 mb-4 text-sm'>
            {spot.hours.map((item, i) => <li key={i}>{item}</li>)}
          </ul>

          <h4 className='font-semibold text-lg mb-1'>Special Days</h4>
          <ul className='list-disc pl-6 mb-4 text-sm'>
            {spot.specialDays.map((item, i) => <li key={i}>{item}</li>)}
          </ul>

          <h4 className='font-semibold text-lg mb-1'>Tips for Visitors</h4>
          <ul className='list-disc pl-6 text-sm'>
            {spot.tips.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default FamousSpots
