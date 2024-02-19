'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function BreadCrumbs () {
  const location = usePathname()
  const pages = location.split(['/'])

  return (
    <div className='flex gap-3 p-5 text-white drop-shadow-lg text-l'>
      <Link href={'/'} className='relative opacity-70 hover:opacity-100'>
        Домашнаяя страница
      </Link>
      {pages.map(page => {
        if (page === '') {
          return
        } else {
          return (
            <div
              key={Math.random()}
              className='flex gap-3 opacity-70 hover:opacity-100 last:opacity-100'
            >
              <p> &gt; </p>
              <Link href={`/${page}`} className='relative '>
                {page === 'search' ? 'Страница поиска' : decodeURI(page)}
              </Link>
            </div>
          )
        }
      })}
    </div>
  )
}
