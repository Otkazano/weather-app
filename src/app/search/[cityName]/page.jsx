'use client'

import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs'
import CurrentWeather from '@/components/CurrentWeather/CurrentWeather'
import { getCurrentWeatherData } from '@/services/getWeatherData'
import { useParams } from 'next/navigation'
import React from 'react'

export default function CityNamePage () {
  const [weatherData, setWeatherData] = React.useState({})
  const params = useParams()

  React.useEffect(() => {
    getCurrentWeatherData(decodeURI(params.cityName))
      .then(res => {
        setWeatherData(res)
        console.log(res)
      })
      .catch(err => console.log(err))
  }, [params])

  return (
    <main className='flex flex-col grow max-w-[1440px] mx-auto w-full'>
      <BreadCrumbs />
      <CurrentWeather weatherData={weatherData} />
    </main>
  )
}
