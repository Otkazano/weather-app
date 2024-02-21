'use client'

import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

export default function BreadCrumbs () {
  const router = useRouter()
  const location = usePathname()
  const pages = location.split(['/'])

  return (
    <ul className='flex gap-3 p-5 text-white drop-shadow-lg text-l'>
      <li>
        <button
          type='button'
          onClick={() => router.push('/')}
          className='relative opacity-70 hover:opacity-100'
        >
          Домашнаяя страница
        </button>
      </li>
      {pages.map(page => {
        if (page === '') {
          return
        } else if (page === 'search') {
          return (
            <li key={Math.random()} className='flex gap-3'>
              <p className='opacity-70'> &gt; </p>
              <button
                type='button'
                onClick={() => router.push(`/${page}`)}
                className='relative opacity-70 hover:opacity-100 '
              >
                Страница поиска
              </button>
            </li>
          )
        } else {
          return (
            <li key={Math.random()} className='flex gap-3'>
              <p className='opacity-70'> &gt; </p>
              <button
                type='button'
                onClick={() => router.push(`/search/${page}`)}
                className='relative opacity-70 hover:opacity-100 '
              >
                {decodeURI(page)}
              </button>
            </li>
          )
        }
      })}
    </ul>
  )
}
