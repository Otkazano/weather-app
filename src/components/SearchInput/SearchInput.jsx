'use client'

import { getWeatherData } from '@/services/getWeatherData'
import React from 'react'

export default function SearchInput ({ onSearch }) {
  const [search, setSearch] = React.useState('')

  function handleSubmit (e) {
    e.preventDefault()

    getWeatherData(search)
      .then(res => console.log(res))
      .catch(err => console.log(err))

    // onSearch()
  }

  return (
    <section className='w-full p-5'>
      <h1 className='m-auto text-center p-4 text-2xl drop-shadow-lg text-3xl font-semibold'>
        Найди свой город!
      </h1>
      <form onSubmit={handleSubmit} name='searchForm'>
        <input
          type='search'
          placeholder='Название города'
          value={search}
          onChange={e => setSearch(e.target.value)}
          name='searchFormName'
          className='text-black'
        ></input>
        <button type='submit'>&#128269;</button>
      </form>
    </section>
  )
}
