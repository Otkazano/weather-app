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
    <div className='text-white drop-shadow-lg font-extralight'>
      {date[2] ? (
        <>
          <p className='text-4xl py-3'>
            {date[0]}th {date[1]} &#8216;{date[2].slice(2)}
          </p>
          <div className='text-2xl flex gap-12'>
            <p className='relative main__line'>{dayOfWeek}</p>
            <p>
              {time[0]}:{time[1]}
            </p>
          </div>
        </>
      ) : (
        <p className='text-2xl'>Узнаем дату в регионе</p>
      )}
    </div>
  )
}
