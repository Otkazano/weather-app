import alphabet from '@/utils/alphabet'
import CityLink from '../CityLink/CityLink'

import './CitiesList.css'

export default function CitiesList () {
  return (
    <section className='w-full px-5 py-6 sm:px-4 sm:py-3'>
      <h2 className='m-auto text-center p-4 drop-shadow-lg text-3xl font-semibold relative z-[-1] sm:text-2xl'>
        Либо выбери его из списка ниже
      </h2>
      <ul className='w-full grid grid-cols-[repeat(auto-fit,_200px)] gap-10 justify-center sm:gap-5'>
        {alphabet.map(letter => {
          return (
            <li key={Math.random()}>
              <h3 className='citiesList__letter mb-1 drop-shadow-lg text-lg font-semibold relative z-[-1] sm:text-base'>
                {letter.toUpperCase()}
              </h3>
              <CityLink firstLetter={letter} />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
