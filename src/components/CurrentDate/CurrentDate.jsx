'use client'

import { getCurrentTime } from '@/services/getCurrentTime'
import React from 'react'

export default function CurrentDate ({ data }) {
  const [date, setDate] = React.useState([])
  const [time, setTime] = React.useState([])
  const [dayOfWeek, setDayOfWeek] = React.useState('')

  React.useEffect(() => {
    if (data.timezone) {
      getCurrentTime(data.timezone)
        .then(res => {
          const dateInfo = res.date_time_wti.split([' '])
          console.log(dateInfo)
          setTime(dateInfo[4].split([':']))
          setDayOfWeek(res.date_time_txt.split([' '])[0].replace(',', ''))
          setDate([dateInfo[1], dateInfo[2], dateInfo[3]])
        })
        .catch(err => {
          console.log(err)
        })
    }
  }, [data])

  return (
    <>
      <p>{dayOfWeek}</p>
      <p>
        {time[0]}:{time[1]}
      </p>
      {date[2] ? (
        <p>
          {date[0]}th {date[1]} ‘{date[2].slice(2)}
        </p>
      ) : (
        ''
      )}
    </>
  )
}
