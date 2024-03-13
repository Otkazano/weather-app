'use client'
import './MoreInfoCurrentWeather.css'

import Image from 'next/image'
import locationIcon from '@/images/locationIcon.svg'
import React from 'react'
import BurgerMenuButton from '../BurgerMenuButton/BurgerMenuButton'
import useWindowDimensions from '@/hooks/useWindowDimension'
import WindDir from '../WindDir/WindDir'
import Clock from '../Clock/Clock'
import HoursInfoList from '../HoursInfoList/HoursInfoList'

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
            className={`flex text-white flex-col grow p-4 w-full drop-shadow-lg transition-all duration-300 overflow-y-scroll moreInfoCurrentWeather ${
              width1260 ? 'absolute' : 'fixed'
            } ${!isOpen && !width1260 ? 'translate-x-full' : ''} xxs:px-2`}
          >
            <div className='flex gap-2 pb-10 items-center sm:pb-8'>
              <Image
                src={locationIcon}
                alt='Иконка локации'
                width={'auto'}
                height={'auto'}
                priority
                className='sm:w-[30px]'
              />
              <p className='text-base truncate font-light max-w-72 sm:text-sm xxs:max-w-60'>
                {weatherData.resolvedAddress}
              </p>
            </div>

            <div className='px-3 pb-1 flex justify-between items-center gap-2'>
              <p className='font-light sm:text-sm'>Состояние погоды</p>
              <p className='text-lg font-medium flex text-end sm:text-base'>
                {weatherData.currentConditions.conditions}
              </p>
            </div>

            <div className='px-3 pb-1 flex justify-between items-center gap-2'>
              <p className='font-light sm:text-sm'>Ощущается как</p>
              <p className='text-lg  font-medium sm:text-base'>
                {Math.round(weatherData.currentConditions.feelslike)} °C
              </p>
            </div>

            <div className='px-3 pb-1 flex justify-between items-center gap-2'>
              <p className='font-light sm:text-sm'>Видимость</p>
              <p className='text-lg  font-medium sm:text-base'>
                {weatherData.currentConditions.visibility || '-'} км
              </p>
            </div>

            <div className='px-3 pb-1 flex justify-between items-center gap-2'>
              <p className='font-light sm:text-sm'>Порывы ветра до</p>
              <p className='text-lg  font-medium sm:text-base'>
                {weatherData.currentConditions.windgust || '-'} км/ч
              </p>
            </div>

            <WindDir weatherData={weatherData} />

            <div className='px-3 pb-1 flex justify-between items-center gap-2'>
              <p className='font-light sm:text-sm'>Атмосферное давление</p>
              <p className='text-lg  font-medium truncate sm:text-base'>
                {Math.round(
                  weatherData.currentConditions.pressure * 0.75006156
                )}
                мм рт. ст.
              </p>
            </div>

            <div className='flex px-3 pb-1 pt-7 justify-around items-center gap-2'>
              <Clock
                title={'Рассвет'}
                weatherData={weatherData.currentConditions.sunrise}
              />
              <Clock
                title={'Закат'}
                weatherData={weatherData.currentConditions.sunset}
              />
            </div>

            <hr className='my-5 w-4/5 mx-auto opacity-70' />

            <div className='px-3 pb-1 flex justify-around '>
              <div className='flex flex-col text-center gap-1'>
                <p className='font-light sm:text-sm'>Макс t°</p>
                <p className='text-lg  font-medium sm:text-base'>
                  {Math.round(weatherData.days[0].tempmax)} °C
                </p>
              </div>

              <div className='flex flex-col text-center gap-1'>
                <p className='font-light sm:text-sm'>Мин t°</p>
                <p className='text-lg  font-medium sm:text-base'>
                  {Math.round(weatherData.days[0].tempmin)} °C
                </p>
              </div>
            </div>

            <HoursInfoList weatherData={weatherData} />
          </aside>
        </>
      ) : (
        <></>
      )}
    </>
  )
}
