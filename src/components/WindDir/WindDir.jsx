'use client'

import Image from 'next/image'
import React from 'react'

import windDirIcon from '@/images/windDirIcon.svg'

function WindDir ({weatherData}) {
  const [windDir, setWindDir] = React.useState('')

  React.useEffect(() => {
      {weatherData.currentConditions.winddir <= 11.25 && setWindDir('C')}
      {11.25 < weatherData.currentConditions.winddir && weatherData.currentConditions.winddir <= 33.75 && setWindDir('CCВ')}
      {33.75 < weatherData.currentConditions.winddir && weatherData.currentConditions.winddir <= 56.25 && setWindDir('CВ')}
      {56.25 < weatherData.currentConditions.winddir && weatherData.currentConditions.winddir <= 78.75 && setWindDir('ВСВ')}
      {78.75 < weatherData.currentConditions.winddir && weatherData.currentConditions.winddir <= 101.25 && setWindDir('В')}
      {101.25 < weatherData.currentConditions.winddir && weatherData.currentConditions.winddir <= 123.75 && setWindDir('ВЮВ')}
      {123.75 < weatherData.currentConditions.winddir && weatherData.currentConditions.winddir <= 146.25 && setWindDir('ЮВ')}
      {146.25 < weatherData.currentConditions.winddir && weatherData.currentConditions.winddir <= 168.72 && setWindDir('ЮЮВ')}
      {168.72 < weatherData.currentConditions.winddir && weatherData.currentConditions.winddir <= 191.25 && setWindDir('Ю')}
      {191.25 < weatherData.currentConditions.winddir && weatherData.currentConditions.winddir <= 213.75 && setWindDir('ЮЮЗ')}
      {213.75 < weatherData.currentConditions.winddir && weatherData.currentConditions.winddir <= 236.25 && setWindDir('ЮЗ')}
      {236.25 < weatherData.currentConditions.winddir && weatherData.currentConditions.winddir <= 258.75 && setWindDir('ЗЮЗ')}
      {258.75 < weatherData.currentConditions.winddir && weatherData.currentConditions.winddir <= 281.25 && setWindDir('З')}
      {281.25 < weatherData.currentConditions.winddir && weatherData.currentConditions.winddir <= 303.75 && setWindDir('ЗСЗ')}
      {303.75 < weatherData.currentConditions.winddir && weatherData.currentConditions.winddir <= 326.25 && setWindDir('СЗ')}
      {326.25 < weatherData.currentConditions.winddir &&  weatherData.currentConditions.winddir <= 348.75 && setWindDir('ССЗ')}
      {weatherData.currentConditions.winddir > 348.75 && setWindDir('C')}
  }, [])

  return (
    <div className='px-3 pb-1 flex justify-between items-center gap-2 '>
      <p className='font-light sm:text-sm'>Направление ветра</p>
      <div className='flex gap-3 sm:gap-2'>
        <p className='text-lg  font-medium sm:text-base'>{windDir}</p>
        <Image
          src={windDirIcon}
          alt='Направление ветра'
          style={{
            transform: `rotate(${weatherData.currentConditions.winddir}deg)`
          }}
          width={'auto'}
          height={'auto'}
          className='my-auto'
        />
        <p className='text-lg font-medium sm:text-base'>
          {weatherData.currentConditions.winddir} °
        </p>
      </div>
    </div>
  )
}

export default WindDir
