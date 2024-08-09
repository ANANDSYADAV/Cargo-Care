"use client";
import { Button, Card } from 'flowbite-react'
import HomeCard from '../components/HomeCard'
import { useNavigate } from 'react-router-dom';

const cardData = [
  { index: 1, banner: '/homeBanner2.webp', text: 'Transportation freshness by controlling cargo temperature', link: '#' },
  { index: 2, banner: '/homeBanner3.jpeg', text: 'Automate your warehouse cold-storage control', link: '#' },
]

function Home() {
  const navigate = useNavigate();

  return (
    <div className='w-[90%] mx-auto mb-8'>
      <div className='mt-6 flex flex-col gap-5'>
        {
          cardData.map((card) => (
            <div key={card.index}>
              <HomeCard data={card} />
            </div>
          ))
        }
      </div>

      <Card href="#" className="max-w-sm bg-pink-100 mt-8">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
          Track Your Last Journey
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 w-[80%] mx-auto">
          Checkout details of your last journey
        </p>
        <Button gradientDuoTone='pinkToOrange' onClick={() => navigate('last_journey')}>
          Start Journey
        </Button>
      </Card>
      
      <Card href="#" className="max-w-sm bg-pink-100 mt-8">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
          Start Today's Journey
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 w-[80%] mx-auto">
          Begin tracking your journey, automating it, and eliminating manual tasks
        </p>
        <Button gradientDuoTone='greenToBlue' onClick={() => navigate('start_journey')}>
          Start Journey
        </Button>
      </Card>

    </div>
  )
}

export default Home