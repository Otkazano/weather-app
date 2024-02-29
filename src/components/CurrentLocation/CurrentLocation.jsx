'use client'

import { getCurrentIpAddress } from '@/services/getCurrentIpAddress'
import { getCurrentLocation } from '@/services/getCurrentLocation'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function CurrentLocation () {
  const router = useRouter()
  const [ipAddress, setIpAddress] = React.useState({})
  const [currentCity, setCurrentCity] = React.useState('не удалось определить')

  React.useEffect(() => {
    getCurrentIpAddress()
      .then(res => {
        setIpAddress(res)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  React.useEffect(() => {
    getCurrentLocation(ipAddress.ip)
      .then(res => {
        if (res.location !== null) {
          setCurrentCity(res.location.data.value)
        } else {
          setCurrentCity(ipAddress.city)
        }
      })
      .catch(err => {
        console.log(err)
        setCurrentCity('не удалось определить')
      })
  }, [ipAddress])

  return (
    <div className='p-5 text-white drop-shadow-lg text-l flex'>
      <p className='opacity-70'>Текущая локация: &nbsp;</p>
      {currentCity === 'не удалось определить' ? (
        <p className='opacity-70'>не удалось определить</p>
      ) : (
        <button
          type='button'
          onClick={() => router.push(`/search/${currentCity}`)}
          className='relative opacity-70 hover:opacity-100 underline'
        >
          {currentCity}
        </button>
      )}
    </div>
  )
}
