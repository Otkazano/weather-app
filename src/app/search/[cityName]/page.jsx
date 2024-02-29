'use client'

import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs'
import CardsList from '@/components/CardsList/CardsList'
import CurrentWeather from '@/components/CurrentWeather/CurrentWeather'
import {
  getCurrentWeatherData,
  getWeatherData
} from '@/services/getWeatherData'
import { useParams } from 'next/navigation'
import React from 'react'
import { useRouter } from 'next/navigation'
import MoreInfoCurrentWeather from '@/components/MoreInfoCurrentWeather/MoreInfoCurrentWeather'

export default function CityNamePage () {
  const [weatherData, setWeatherData] = React.useState({})
  const [isError, setIsError] = React.useState(false)
  const params = useParams()
  const router = useRouter()

  React.useEffect(() => {
    getWeatherData(decodeURI(params.cityName))
      .then(res => {
        setWeatherData(res)
        console.log(res)
      })
      .catch(err => {
        console.log(err)
        setIsError(true)
      })
  }, [params])

  return (
    <main className='flex flex-col grow max-w-[1440px] mx-auto w-full relative '>
      {!isError ? (
        <>
          <section className='flex flex-col grow'>
            <h1 hidden={true}>Страница погоды в городе</h1>
            <BreadCrumbs />
            <CurrentWeather weatherData={weatherData} />
            <CardsList weatherData={weatherData} />
          </section>
          <MoreInfoCurrentWeather weatherData={weatherData} />
        </>
      ) : (
        <section className='flex flex-col grow text-white mx-auto justify-center gap-6 w-full'>
          <h1 className='drop-shadow-lg text-5xl text-center font-semibold'>
            Город не найден
          </h1>
          <button
            type='button'
            onClick={() => router.back()}
            className='w-[500px] mx-auto h-20 rounded-lg text-xl flex justify-center
 items-center text-white tracking-widest bg-[#7e609c] drop-shadow-lg shadow-2xl opacity-90 relative hover:opacity-100 active:top-[5px]'
          >
            Вернуться на предыдущую страницу
          </button>
        </section>
      )}
    </main>
  )
}
