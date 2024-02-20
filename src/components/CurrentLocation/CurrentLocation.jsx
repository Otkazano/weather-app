'use client'

import { getCurrentIpAddress } from '@/services/getCurrentIpAddress'
import { getCurrentLocation } from '@/services/getCurrentLocation'
import Link from 'next/link'
import React from 'react'

export default function CurrentLocation () {
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
          setCurrentCity(res.location)
        } else {
          setCurrentCity(ipAddress.city)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }, [ipAddress])

  return (
    <div className='p-5 text-white drop-shadow-lg text-l flex'>
      <p className='opacity-70'>Текущая локация: &nbsp;</p>
      <Link
        href={`/search/${currentCity}`}
        className='relative opacity-70 hover:opacity-100'
      >
        {currentCity}
      </Link>
    </div>
  )
}
