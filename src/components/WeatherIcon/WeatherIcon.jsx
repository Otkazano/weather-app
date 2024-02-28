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
import snow from '@/images/snow.svg'
import thunderrain from '@/images/thunder-rain.svg'
import thundershowersday from '@/images/thunder-showers-day.svg'
import thundershowersnight from '@/images/thunder-showers-night.svg'
import thunder from '@/images/thunder.svg'
import wind from '@/images/wind.svg'

export default function WeatherIcon ({ data, classList }) {
  const [path, setPath] = React.useState(clouderror)
  React.useEffect(() => {
    if (data.currentConditions) {
      {data.currentConditions.icon === 'clear-day' ? setPath(clearday) : ''}
      {data.currentConditions.icon === 'clear-night' ? setPath(clearnight) : ''}
      {data.currentConditions.icon === 'cloudy' ? setPath(cloudy) : ''}
      {data.currentConditions.icon === 'fog' ? setPath(fog) : ''}
      {data.currentConditions.icon === 'hail' ? setPath(hail) : ''}
      {data.currentConditions.icon === 'partly-cloudy-day' ? setPath(partlycloudyday) : ''}
      {data.currentConditions.icon === 'partly-cloudy-night' ? setPath(partlycloudynight) : ''}
      {data.currentConditions.icon === 'rain-snow-showers-day' ? setPath(rainsnowshowersday) : ''}
      {data.currentConditions.icon === 'rain-snow-showers-night' ? setPath(rainsnowshowersnight) : ''}
      {data.currentConditions.icon === 'rain' ? setPath(rain) : ''}
      {data.currentConditions.icon === 'rain-snow' ? setPath(rainsnow) : ''}
      {data.currentConditions.icon === 'showers-day' ? setPath(showersday) : ''}
      {data.currentConditions.icon === 'showers-night' ? setPath(showersnight) : ''}
      {data.currentConditions.icon === 'sleet' ? setPath(sleet) : ''}
      {data.currentConditions.icon === 'snow-showers-day' ? setPath(snowshowersday) : ''}
      {data.currentConditions.icon === 'snow' ? setPath(snow) : ''}
      {data.currentConditions.icon === 'thunder-rain' ? setPath(thunderrain) : ''}
      {data.currentConditions.icon === 'thunder-showers-day' ? setPath(thundershowersday) : ''}
      {data.currentConditions.icon === 'thunder-showers-night' ? setPath(thundershowersnight) : ''}
      {data.currentConditions.icon === 'thunder' ? setPath(thunder) : ''}
      {data.currentConditions.icon === 'wind' ? setPath(wind) : ''}
    }
  }, [data])

  return (
    <>
      <Image
        src={path}
        alt='Иконка погоды'
        width={'auto'}
        height={'auto'}
        priority
        className={classList}
      />
    </>
  )
}
