'use client'

import { getCurrentIpAddress } from '@/services/getCurrentIpAddress'
import { getCurrentLocation } from '@/services/getCurrentLocation'
import React from 'react'

export default function CurrentLocation () {
  const [ipAddress, setIpAddress] = React.useState('')
  const [currentCity, setCurrentCity] = React.useState('не удалось определить')

  React.useEffect(() => {
    getCurrentIpAddress()
      .then(res => {
        setIpAddress(res.ip)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  React.useEffect(() => {
    getCurrentLocation(ipAddress)
      .then(res => {
        if (res.location !== null) {
          setCurrentCity(res.location)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }, [ipAddress])

  return <p>Текущая локация: {currentCity}</p>
}
