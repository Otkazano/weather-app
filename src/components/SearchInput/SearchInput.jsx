'use client'

import './SearchInput.css'
import React from 'react'
import { useRouter } from 'next/navigation'
import { getHintForInput } from '@/services/getHintForInput'

export default function SearchInput () {
  const router = useRouter()
  const [search, setSearch] = React.useState('')
  const [hintsShowList, setHintsShowList] = React.useState([])
  const inputReference = React.useRef(null)

  function handleSubmit (e) {
    e.preventDefault()
    router.push(`/search/${search}`)
  }

  function onChangeInput (e) {
    setSearch(e.target.value)
    getHintForInput(e.target.value)
      .then(res => {
        console.log(res)
        setHintsShowList(res.suggestions)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <section className='w-full px-5 py-6'>
      <h2 className='m-auto text-center p-4 drop-shadow-lg text-3xl font-semibold'>
        Найди свой город!
      </h2>
      <form
        onSubmit={handleSubmit}
        name='searchForm'
        className='flex justify-center gap-3 relative'
      >
        <div className='flex flex-col drop-shadow-lg w-9/12 items-stretch'>
          <input
            type='search'
            placeholder='Название города'
            value={search}
            onChange={e => onChangeInput(e)}
            name='searchFormName'
            className='searchInput__input p-2 rounded-xl text-xl relative focus:text-xl'
            required
            autoComplete='off'
            ref={inputReference}
          ></input>
          {hintsShowList.length !== 0 ? (
            <ul className='absolute top-[46px] flex p-1 flex-col h-28 overflow-y-scroll rounded-xl bg-neutral-950/50 backdrop-blur-2xl searchInput__list w-full'>
              {hintsShowList.map(item => {
                if (item.data.city) {
                  return (
                    <li key={Math.random()} className=''>
                      <button
                        type='button'
                        onClick={() => {
                          setSearch(item.value)
                          inputReference.current.focus()
                        }}
                        className='text-start px-2 opacity-80 hover:opacity-100 focus:opacity-100 w-full'
                      >
                        {item.value}
                      </button>
                    </li>
                  )
                }
              })}
            </ul>
          ) : (
            <></>
          )}
        </div>

        <button type='submit'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='25'
            height='26'
            viewBox='0 0 25 26'
            fill='none'
            className='drop-shadow-lg opacity-80 relative hover:opacity-100 active:top-[5px]'
          >
            <path
              d='M24.1239 24.7031C24.8077 24.0075 24.8077 22.8922 24.1239 22.1965L18.7478 16.7278C19.9906 14.989 20.7254 12.8505 20.7254 10.5408C20.7254 4.72875 16.0768 0 10.3622 0C4.6486 0 0 4.72875 0 10.5408C0 16.354 4.6486 21.0817 10.3622 21.0817C12.5283 21.0817 14.5401 20.4024 16.2057 19.2422L21.5741 24.7031C22.2746 25.4158 23.4233 25.4158 24.1239 24.7031ZM3.03943 10.5408C3.03943 6.43283 6.32487 3.09075 10.3632 3.09075C14.4016 3.09075 17.6871 6.43283 17.6871 10.5408C17.6871 14.6488 14.4016 17.9909 10.3632 17.9909C6.3238 17.9909 3.03943 14.6488 3.03943 10.5408Z'
              fill='white'
            />
          </svg>
        </button>
      </form>
    </section>
  )
}
