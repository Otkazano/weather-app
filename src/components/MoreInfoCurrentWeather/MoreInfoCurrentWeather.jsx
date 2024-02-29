'use client'
import './MoreInfoCurrentWeather.css'

import Image from 'next/image'
import locationIcon from '@/images/locationIcon.svg'
import React from 'react'
import BurgerMenuButton from '../BurgerMenuButton/BurgerMenuButton'

export default function MoreInfoCurrentWeather ({ weatherData }) {
  const [isOpen, setIsOpen] = React.useState(Boolean)
  function handleClick () {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {weatherData.currentConditions ? (
        <>
          <BurgerMenuButton onClick={handleClick} isOpen={isOpen} />
          <aside
            className={` ${
              !isOpen ? 'opacity-0 invisible' : ''
            } flex text-white flex-col grow p-4 w-full drop-shadow-lg moreInfoCurrentWeather transition-all duration-300`}
          >
            <div className='flex gap-2 items-center'>
              <Image
                src={locationIcon}
                alt='Иконка локации'
                width={'auto'}
                height={'auto'}
                priority
              />
              <p className='text-l truncate font-light max-w-72'>
                {weatherData.resolvedAddress}
              </p>
            </div>
          </aside>
        </>
      ) : (
        <></>
      )}
    </>
  )
}
