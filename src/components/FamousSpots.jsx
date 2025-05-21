import React from 'react'
import pic2 from "/koraditemple.jpg"
import TrueFocus from './truefocus';

const FamousSpots = () => {
  const data = [
    {
      id: 1,
      title: 'Deekshabhoomi',
      image: '/deekshabhoomi.png',
      description: 'Deekshabhoomi is the sacred monument where Dr. B.R. Ambedkar converted to Buddhism along with over 600,000 followers on 14th October 1956. It marked a major social and spiritual movement in India known as the Dalit Buddhist Movement.',
      location: [
        'City: Nagpur, Maharashtra',
      ],
      hours: [
        'Open: 6:00 AM to 9:00 PM (daily)',

      ],
      special: [
        'Dhamma Chakra Pravartan Din (14 October)',
        'A major annual festival commemorating Ambedkar’s conversion.',

      ],
      tips: [
        'No entry fee',
        'Shoes must be removed before entering the Stupa',

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
      ]
    },
    {
      id: 4,
      title: 'Futala Lake',
      image: '/futala.jpg',
      description: 'Futala Lake is a scenic and popular evening spot in Nagpur, known for its colorful fountains, food stalls, and serene ambiance. It’s a favorite hangout place for locals and tourists alike.',
      location: [
        'City: Nagpur, Maharashtra',
        'Area: Vayusena Nagar, about 6 km from city center',
        'Accessible by autos, buses, and private vehicles'
      ],
      hours: [
        'Open: 24 hours (best visited in the evening)',
        'Best time to visit: Sunset and after dark when the fountain lights are on'
      ],
      special: [
        'Musical fountain and lighting in the evening',
        'Popular street food vendors around the lake',
        'Relaxing spot for families and couples'
      ],
      tips: [
        'Ideal for evening walks and photography',
        'Keep an eye on children near the water',
        'Try local snacks like bhel and pani puri',
        'Carry drinking water if visiting in summer'
      ]
    },
    {
      id: 5,
      title: 'Ambazari Lake',
      image: '/ambazari.webp',
      description: 'Ambazari Lake is the largest lake in Nagpur and a key spot for nature lovers. Surrounded by lush greenery, it offers a peaceful escape with boating, a garden, and a walking trail.',
      location: [
        'City: Nagpur, Maharashtra',
        'Area: Ambazari, near VNIT College',
        'Accessible by buses, autos, and private vehicles'
      ],
      hours: [
        'Open: 6:00 AM to 8:00 PM (daily)',
        'Best time to visit: Early morning or evening'
      ],
      special: [
        'Ambazari Garden with play area and musical fountain',
        'Boating facility available (subject to season)',
        'Jogging and walking track along the lake'
      ],
      tips: [
        'Great for family outings and picnics',
        'Wear comfortable shoes for walking',
        'Avoid littering and keep the area clean',
        'Mosquito repellent may be useful in the evening'
      ]
    },

    {
      id: 6,
      title: 'Zero Mile Stone',
      image: '/zero_mile.jpg',
      description: 'Zero Mile Stone is a historic monument marking the geographical center of colonial India. It is a notable landmark in Nagpur and is considered an important point of interest in the city.',
      location: [
        'City: Nagpur, Maharashtra',
        'Area: Wardha Road, Civil Lines',
        'Easily accessible by all public and private transport'
      ],
      hours: [
        'Open: 6:00 AM to 9:00 PM (daily)',
        'Best time to visit: Daytime for historical exploration'
      ],
      special: [
        'Historic monument with a sandstone pillar',
        'Engraved distances to major cities during British rule',
        'Adjacent to a small landscaped area for resting'
      ],
      tips: [
        'Good spot for history and photography lovers',
        'Read the inscriptions on the pillar for context',
        'Combine visit with other central Nagpur attractions',
        'No entry fee; quick visit suitable for tight schedules'
      ]
    },

  ];
  return (
    <>

      <div className="bg-cover bg-center h-screen text-white text-center font-bold " style={{ backgroundImage: "url('/nagpurbg3.png')" }}>
        <p className='text-4xl pt-15'  >welcome to</p>
        <p className='  text-orange-600 text-2xl sm:text-4xl md:text-9x1 lg:text-9xl '> Nagpur</p>
        <p className='text-3xl pt-5'>Experience the vibrant culture</p>
        <p className='text-3xl'>rich history,and natural beauty</p>
      </div>

      <div className="bg-black text-white min-h-screen px-4 py-10 md:px-8">
        {/* <h1 className="text-4xl font-bold text-center mb-12">Famous spots in <span className='inline-block animate-bounce text-orange-600 text-4xl'>Nagpur</span></h1> */}
        <TrueFocus
          sentence="Famous spots in Nagpur"
          manualMode={false}
          blurAmount={2}
          borderColor="Orange"
          animationDuration={1}
          pauseBetweenAnimations={1}
          
        />

        <div className="grid grid-cols-1 md:grid-cols-2 md:font-bold gap-8">
          {data.map((spot) => (
            <div key={spot.id} className="bg-orange-200 text-black rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-3">{spot.id}. {spot.title}</h2>
              <img src={spot.image} alt={spot.title} className="w-60 h-60 object-cover rounded-xl border mb-4" />

              <h3 className="font-semibold mb-1">What is {spot.title}?</h3>
              <p className="mb-4">{spot.description}</p>

              <h4 className="font-semibold">📍 Location</h4>
              <div className="mb-4">{spot.location.map((element, index) => <p key={index}>{element}</p>)}</div>

              <h4 className="font-semibold">🕐 Visiting Hours</h4>
              <ul className="list-disc list-inside mb-4">
                {spot.hours.map((item, i) => <li key={i}>{item}</li>)}
              </ul>

              <h4 className="font-semibold">📅 Special Days</h4>
              <ul className="list-disc list-inside mb-4">
                {spot.special.map((item, i) => <li key={i}>{item}</li>)}
              </ul>

              <h4 className="font-semibold">📝 Tips for Visitors</h4>
              <ul className="list-disc list-inside">
                {spot.tips.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>

    </>

  )
}

export default FamousSpots
