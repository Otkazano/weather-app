'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function BreadCrumbs () {
  const location = usePathname()
  const pages = location.split(['/'])

  return (
    <ul className='flex gap-3 p-5 text-white drop-shadow-lg text-l'>
      <li>
        <Link href={'/'} className='relative opacity-70 hover:opacity-100'>
          Домашнаяя страница
        </Link>
      </li>
      {pages.map(page => {
        if (page === '') {
          return
        } else if (page === 'search') {
          return (
            <li key={Math.random()} className='flex gap-3'>
              <p className='opacity-70'> &gt; </p>
              <Link
                href={`/${page}`}
                className='relative opacity-70 hover:opacity-100 '
              >
                Страница поиска
              </Link>
            </li>
          )
        } else {
          return (
            <li key={Math.random()} className='flex gap-3'>
              <p className='opacity-70'> &gt; </p>
              <Link
                href={`/search/${page}`}
                className='relative opacity-70 hover:opacity-100 '
              >
                {decodeURI(page)}
              </Link>
            </li>
          )
        }
      })}
    </ul>
  )
}
