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


export default function CurrentWeatherImg ({ data }) {
  const [path, setPath] = React.useState('')
  React.useEffect(() => {
    
  }, [data])

  return (
    <section>
      <Image src={clearday} alt='Иконка' />
    </section>
  )
}
