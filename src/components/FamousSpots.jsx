import React from 'react'
import pic2 from "/koraditemple.jpg"

const FamousSpots = () => {
  const data = [
    {
      id: 1,
      title: 'Deekshabhoomi',
      image:'/deekshabhoomi.png' ,
      description: 'Deekshabhoomi is the sacred monument where Dr. B.R. Ambedkar converted to Buddhism along with over 600,000 followers on 14th October 1956. It marked a major social and spiritual movement in India known as the Dalit Buddhist Movement.',
      location: [
        'City: Nagpur, Maharashtra',
        'Area: Near Ramdaspeth, close to the main city center',
        'Easily accessible by road and rail'],
      hours: [
        'Open: 6:00 AM to 9:00 PM (daily)',
        'Best time to visit: Early morning or evening for a peaceful experience.'
      ],
      special: [
        'Dhamma Chakra Pravartan Din (14 October)',
        'A major annual festival commemorating Ambedkar’s conversion.',
        'Millions of followers visit Deekshabhoomi on this day.',
        'Expect large crowds and special cultural events.'
      ],
      tips: [
        'No entry fee',
        'Shoes must be removed before entering the Stupa',
        'Photography is allowed but be respectful',
        'Quiet and respectful behavior is appreciated inside',
        'Ideal for spiritual seekers, history enthusiasts, and architecture lovers'
      ]
    },
     {
        id: 2,
        title: 'Taj Bagh Dargah (Taj Baba Dargah)',
        image: '/tajbagh.jpeg',
        description: 'Taj Bagh Dargah is a revered Sufi shrine dedicated to the Sufi saint Hazrat Baba Tajuddin Aulia. It is a major spiritual destination in Nagpur, drawing devotees from all religions who come to seek blessings and peace.',
        location: [
          'City: Nagpur, Maharashtra',
          'Area: Taj Bagh, near Central Jail Road',
          'Accessible by autos, buses, and private vehicles'
        ],
        hours: [
          'Open: 5:00 AM to 10:00 PM (daily)',
          'Best time to visit: Evening for a peaceful spiritual atmosphere and Sufi music'
        ],
        special: [
          'Urs Festival (death anniversary of the saint)',
          'Attracts thousands of pilgrims and spiritual seekers',
          'Includes Qawwali performances, food distribution, and prayers'
        ],
        tips: [
          'Modest dress is recommended',
          'Remove shoes before entering the Dargah',
          'Respect local customs and avoid loud behavior',
          'Take care of your belongings during crowded events'
        ]
      },
      {
        id: 3,
        title: 'Koradi Temple',
        image: pic2,
        description: 'Koradi Temple is a famous Hindu temple dedicated to Goddess Mahalaxmi Devi. It is one of the prominent Shakti temples near Nagpur and attracts thousands of devotees, especially during the Navratri festival.',
        location: [
          'City: Nagpur, Maharashtra',
          'Area: Koradi Road, about 15 km from city center',
          'Accessible by buses, autos, and private vehicles'
        ],
        hours: [
          'Open: 5:00 AM to 10:00 PM (daily)',
          'Best time to visit: Early morning or during festive season'
        ],
        special: [
          'Navratri Festival (March–April and September–October)',
          'Thousands of devotees gather for prayers and rituals',
          'Decorated with lights, music, and devotional programs'
        ],
        tips: [
          'Carry offerings like coconut and flowers if you wish to perform pooja',
          'Shoes must be removed before entering temple premises',
          'Respect temple rules and maintain cleanliness',
          'Stay hydrated, especially during summer visits'
        ] },
     

  ];
  return (
    <>
      <div className='bg-gradient-to-br from-gray-900 to-black text-white min-h-screen px-4 py-10'>
        <h1 className='text-4xl font-bold text-center mb-12 underline'>Famous religous spots</h1>
        <ul>
          {data.map((spot) => (
         (
          <div key={spot.id} className='bg-white text-black rounded-2xl shadow-lg m-12 p-6 max-w-4xl mx-auto'>
         <h2 className='text-2xl font-bold mb-3'> {spot.id}. {spot.title} </h2>
          <img src={spot.image} alt={spot.title} className='w-full h-100 object-cover rounded-xl border mb-4' />
          <h3>what is {spot.title}</h3>
          <p>{spot.description}</p>
          <h4>location</h4>
          <div>{spot.location.map((element,index)=><p key={index}>{element}</p>)}</div>
          <div>
              <h4 className="font-semibold">🕐 Visiting Hours</h4>
              <ul className="list-disc list-inside">
                {spot.hours.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
              <div>
              <h4 className="font-semibold">📅 Special Days</h4>
              <ul className="list-disc list-inside">
                {spot.special.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
             <div>
              <h4 className="font-semibold">📝 Tips for Visitors</h4>
              <ul className="list-disc list-inside">
                {spot.tips.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
            <h1>famous lake spots
            </h1>
          </div>
        


          )

          ))
      }
        </ul>
      </div>
    </>

  )
}

export default FamousSpots
