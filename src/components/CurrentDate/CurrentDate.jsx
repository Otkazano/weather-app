'use client'

import { getCurrentTime } from '@/services/getCurrentTime'
import React from 'react'

export default function CurrentDate ({ data }) {
  const [date, setDate] = React.useState()
  React.useEffect(() => {
    if (data.timezone) {
      getCurrentTime(data.timezone)
        .then(res => {
          setDate(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
    console.log(date)
  }, [data])

  return (
    <>
      <p>Privet</p>
      <p>Poka</p>
    </>
  )
}
