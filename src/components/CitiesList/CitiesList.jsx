import alphabet from '@/utils/alphabet'
import CityLink from '../CityLink/CityLink'

import './CitiesList.css'

export default function CitiesList () {
  return (
    <section className='w-full p-5'>
      <h2 className='m-auto text-center p-4 text-2xl drop-shadow-lg text-3xl font-semibold'>
        Либо выбери свой город из списка
      </h2>
      <ul className='w-full grid grid-cols-[repeat(auto-fit,_200px)] gap-10 justify-center '>
        {alphabet.map(letter => {
          return (
            <li>
              <h3
                key={Math.random()}
                className='citiesList__letter mb-1 drop-shadow-lg text-lg font-semibold'
              >
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
