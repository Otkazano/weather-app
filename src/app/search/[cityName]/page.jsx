'use client'

import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs'
import { getWeatherData } from '@/services/getWeatherData'
import fromFtoC from '@/utils/fromFtoC'
import { usePathname, useParams } from 'next/navigation'
import React from 'react'

export default function CityNamePage () {
  const [weatherData, setWeatherData] = React.useState({})
  const pathName = usePathname()
  const params = useParams()

  React.useEffect(() => {
    getWeatherData(decodeURI(params.cityName))
      .then(res => {
        setWeatherData(res)
      })
      .catch(err => console.log(err))

    console.log(pathName)
    console.log(params)
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
