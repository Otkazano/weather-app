'use client'

import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs'
import { getWeatherData } from '@/services/getWeatherData'
import { useParams } from 'next/navigation'
import React from 'react'

export default function CityNamePage () {
  const [weatherData, setWeatherData] = React.useState({})
  const pathName = useParams()

  React.useEffect(() => {
    getWeatherData(decodeURI(pathName.cityName))
      .then(res => {
        setWeatherData(res)
        console.log(res)
      })
      .catch(err => console.log(err))
      .finally()
  }, [])

  return (
    <main className='flex flex-col grow max-w-[1440px] mx-auto w-full'>
      <BreadCrumbs />
      <h1 className='mt-auto text-center p-2 text-2xl'>Секция дополняется</h1>
      <p className='mb-auto text-center p-2 text-2xl'>
        Тут будет погода в городе {weatherData.address}
      </p>
    </main>
  )
}
