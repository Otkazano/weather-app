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
    if (data.icon) {
      {data.icon === 'clear-day' ? setPath(clearday) : ''}
      {data.icon === 'clear-night' ? setPath(clearnight) : ''}
      {data.icon === 'cloudy' ? setPath(cloudy) : ''}
      {data.icon === 'fog' ? setPath(fog) : ''}
      {data.icon === 'hail' ? setPath(hail) : ''}
      {data.icon === 'partly-cloudy-day' ? setPath(partlycloudyday) : ''}
      {data.icon === 'partly-cloudy-night' ? setPath(partlycloudynight) : ''}
      {data.icon === 'rain-snow-showers-day' ? setPath(rainsnowshowersday) : ''}
      {data.icon === 'rain-snow-showers-night' ? setPath(rainsnowshowersnight) : ''}
      {data.icon === 'rain' ? setPath(rain) : ''}
      {data.icon === 'rain-snow' ? setPath(rainsnow) : ''}
      {data.icon === 'showers-day' ? setPath(showersday) : ''}
      {data.icon === 'showers-night' ? setPath(showersnight) : ''}
      {data.icon === 'sleet' ? setPath(sleet) : ''}
      {data.icon === 'snow-showers-day' ? setPath(snowshowersday) : ''}
      {data.icon === 'snow' ? setPath(snow) : ''}
      {data.icon === 'thunder-rain' ? setPath(thunderrain) : ''}
      {data.icon === 'thunder-showers-day' ? setPath(thundershowersday) : ''}
      {data.icon === 'thunder-showers-night' ? setPath(thundershowersnight) : ''}
      {data.icon === 'thunder' ? setPath(thunder) : ''}
      {data.icon === 'wind' ? setPath(wind) : ''}
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
