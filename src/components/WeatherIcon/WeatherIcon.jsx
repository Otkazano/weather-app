'use client'
import React from 'react'

import Image from 'next/image'
import clearday from '@/images/clear-day.svg'
import clearnight from '@/images/clear-night.svg'
import cloudy from '@/images/cloudy.svg'
import fog from '@/images/fog.svg'
import hail from '@/images/hail.svg'
import partlycloudyday from '@/images/partly-cloudy-day.svg'
import partlycloudynight from '@/images/partly-cloudy-night.svg'
import rainsnowshowersday from '@/images/rain-snow-showers-day.svg'
import rainsnowshowersnight from '@/images/rain-snow-showers-night.svg'
import rain from '@/images/rain.svg'
import rainsnow from '@/images/rain-snow.svg'
import showersday from '@/images/showers-day.svg'
import showersnight from '@/images/showers-night.svg'
import sleet from '@/images/sleet.svg'
import snowshowersday from '@/images/snow-showers-day.svg'
import clouderror from '@/images/cloud-error.svg'

export default function WeatherIcon ({ data }) {
  const [path, setPath] = React.useState(clouderror)
  React.useEffect(() => {
    {data === 'clear-day' ? setPath(clearday) : ''}
    {data === 'clear-night' ? setPath(clearnight) : ''}
    {data === 'cloudy' ? setPath(cloudy) : ''}
    {data === 'fog' ? setPath(fog) : ''}
    {data === 'hail' ? setPath(hail) : ''}
    {data === 'partly-cloudy-day' ? setPath(partlycloudyday) : ''}
    {data === 'partly-cloudy-night' ? setPath(partlycloudynight) : ''}
    {data === 'rain-snow-showers-day' ? setPath(rainsnowshowersday) : ''}
    {data === 'rain-snow-showers-night' ? setPath(rainsnowshowersnight) : ''}
    {data === 'rain' ? setPath(rain) : ''}
    {data === 'rain-snow' ? setPath(rainsnow) : ''}
    {data === 'showers-day' ? setPath(showersday) : ''}
    {data === 'showers-night' ? setPath(showersnight) : ''}
    {data === 'sleet' ? setPath(sleet) : ''}
    {data === 'snow-showers-day' ? setPath(snowshowersday) : ''}
  }, [data])

  return (
    <section>
      <Image src={path} alt='Иконка погоды' width={'auto'} height={'auto'} priority className='w-36 drop-shadow-lg m-5'/>
    </section>
  )
}
