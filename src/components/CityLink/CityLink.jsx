'use client'

import russia from '@/utils/russia'
import sortArr from '@/utils/sortArr'
import Link from 'next/link'
import './CityLink.css'

export default function CityLink ({ firstLetter }) {
  const showList = []
  sortArr(russia, showList, firstLetter)

  return (
    <ul className='cityLink-box h-60 overflow-y-scroll '>
      {showList.map(city => {
        return (
          <li key={Math.random()}>
            <Link
              href={`/search/${city}`}
              className='drop-shadow-lg p-1 font-light opacity-80 hover:opacity-100'
            >
              {city}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
