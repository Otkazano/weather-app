'use client'

import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs'
import CurrentWeatherImg from '@/components/CurrentWeatherImg/CurrentWeatherImg'
import {
  getWeatherData,
  getCurrentWeatherData
} from '@/services/getWeatherData'
import { useParams } from 'next/navigation'
import React from 'react'

export default function CityNamePage () {
  const [weatherData, setWeatherData] = React.useState({})
  const params = useParams()

  React.useEffect(() => {
    getCurrentWeatherData(decodeURI(params.cityName))
      .then(res => {
        setWeatherData(res)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <main className='flex flex-col grow max-w-[1440px] mx-auto w-full'>
      <BreadCrumbs />
      <h1 className='mt-auto text-center p-2 text-2xl'>Секция дополняется</h1>
      <CurrentWeatherImg />
    </main>
  )
}
