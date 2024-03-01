'use client'
import './MoreInfoCurrentWeather.css'

import Image from 'next/image'
import locationIcon from '@/images/locationIcon.svg'
import React from 'react'
import BurgerMenuButton from '../BurgerMenuButton/BurgerMenuButton'
import useWindowDimensions from '@/hooks/useWindowDimension'
import WindDir from '../WindDir/WindDir'

export default function MoreInfoCurrentWeather ({ weatherData }) {
  const [isOpen, setIsOpen] = React.useState(Boolean)
  const [showButton, setShowButton] = React.useState(Boolean)
  const [width1260, setWidth1260] = React.useState(Boolean)
  const { width, height } = useWindowDimensions()

  function handleClick () {
    setIsOpen(!isOpen)
  }

  React.useEffect(() => {
    if (width >= 1260) {
      setIsOpen(true)
      setShowButton(true)
      setWidth1260(true)
    } else {
      setIsOpen(false)
      setShowButton(false)
      setWidth1260(false)
    }
  }, [width])

  return (
    <>
      {weatherData.currentConditions ? (
        <>
          <BurgerMenuButton
            onClick={handleClick}
            isOpen={isOpen}
            hidden={showButton}
          />
          <aside
            className={`flex text-white flex-col grow p-4 w-full drop-shadow-lg transition-all duration-300 moreInfoCurrentWeather ${
              width1260 ? 'absolute' : 'fixed'
            } ${!isOpen && !width1260 ? 'translate-x-full' : ''}`}
          >
            <div className='flex gap-2 pb-4 items-center'>
              <Image
                src={locationIcon}
                alt='Иконка локации'
                width={'auto'}
                height={'auto'}
                priority
              />
              <p className='text-base truncate font-light max-w-72'>
                {weatherData.resolvedAddress}
              </p>
            </div>
            <div className='px-3 pb-1 flex justify-between items-center gap-2'>
              <p className='font-light'>Состояние погоды</p>
              <p className='text-lg  font-medium truncate'>
                {weatherData.currentConditions.conditions}
              </p>
            </div>
            <div className='px-3 pb-1 flex justify-between items-center gap-2'>
              <p className='font-light'>Ощущается как</p>
              <p className='text-lg  font-medium'>
                {Math.round(weatherData.currentConditions.feelslike)} °C
              </p>
            </div>
            <div className='px-3 pb-1 flex justify-between items-center gap-2'>
              <p className='font-light'>Порывы ветра до</p>
              <p className='text-lg  font-medium'>
                {weatherData.currentConditions.windgust || '-'} км/ч
              </p>
            </div>
            <div className='px-3 pb-1 flex justify-between items-center gap-2'>
              <p className='font-light'>Атмосферное давление</p>
              <p className='text-lg  font-medium'>
                {Math.round(
                  weatherData.currentConditions.pressure * 0.75006156
                )}
                мм рт. ст.
              </p>
            </div>
            <WindDir weatherData={weatherData} />
          </aside>
        </>
      ) : (
        <></>
      )}
    </>
  )
}
