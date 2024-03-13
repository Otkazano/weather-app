'use client'
import './CardsList.css'
import React from 'react'
import SmallInfoCard from '../SmallInfoCard/SmallInfoCard'

export default function CardsList ({ weatherData }) {
  const [slider, setSlider] = React.useState({})

  function slideLeft () {
    slider.scrollLeft += -200
  }

  function slideRight () {
    slider.scrollLeft += 200
  }

  React.useEffect(() => {
    setSlider(document.getElementById('slider'))
  }, [weatherData])

  return (
    <>
      {weatherData.days ? (
        <section className='flex gap-3 px-16 text-white drop-shadow-lg sm:px-10 sm:gap-2'>
          <h3 hidden={true}>Список карточек погоды</h3>
          <button
            title='scroll left'
            onClick={slideLeft}
            className='cardsList__button'
          >
            &#8249;
          </button>
          <div
            className='cardsList__box flex gap-4 overflow-x-scroll max-w-2xl'
            id='slider'
          >
            {weatherData.days ? (
              weatherData.days.map(day => {
                return <SmallInfoCard key={Math.random()} dayData={day} />
              })
            ) : (
              <></>
            )}
          </div>

          <button
            title='scroll right'
            onClick={slideRight}
            className='cardsList__button'
          >
            &#8250;
          </button>
        </section>
      ) : (
        <></>
      )}
    </>
  )
}
