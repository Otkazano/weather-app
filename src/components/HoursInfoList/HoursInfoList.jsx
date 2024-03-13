'use client'
import React from 'react'
import HoursInfoCard from '../HoursInfoCard/HoursInfoCard'
import './HoursInfoList.css'

export default function HoursInfoList ({ weatherData }) {
  const [slider, setSlider] = React.useState({})

  function slideLeft () {
    slider.scrollLeft += -200
  }

  function slideRight () {
    slider.scrollLeft += 200
  }

  React.useEffect(() => {
    setSlider(document.getElementById('hoursList-slider'))
  }, [weatherData])

  return (
    <div className='p-3'>
      <button title='scroll left' onClick={slideLeft} className='hoursInfoList__button mr-2 drop-shadow-lg'>
        &#8249;
      </button>
      <button title='scroll right' onClick={slideRight} className='hoursInfoList__button drop-shadow-lg'>
        &#8250;
      </button>
      <div
        className='hoursInfoList__box flex px-2 gap-9 overflow-x-scroll mt-2 sm:gap-7'
        id='hoursList-slider'
      >
        {weatherData.days[0].hours.map(day => {
          return <HoursInfoCard hourData={day} key={Math.random()} />
        })}
      </div>
    </div>
  )
}
