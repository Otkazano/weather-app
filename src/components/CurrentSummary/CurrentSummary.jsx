import './CurrentSummary.css'
import Image from 'next/image'
import uvIndexIcon from '@/images/uvIndexIcon.svg'
import windyIcon from '@/images/windyIcon.svg'
import humIcon from '@/images/humIcon.svg'

export default function CurrentSummary ({ data }) {
  return (
    <>
      {data.currentConditions ? (
        <div className='flex text-white gap-10 drop-shadow-lg font-extralight text-xl py-10 my:flex-col my:gap-3 my:max-w-[200px] sm:text-sm my:py-5'>
          <div className='flex relative currentSummary__line gap-2 items-center'>
            <Image
              src={windyIcon}
              alt='Скорость ветра'
              width={'auto'}
              height={'auto'}
              priority
              className='sm:w-[20px] sm:h-[20px] sm:mr-[6px]' 
            />
            <p>Wind</p>
            <p className='font-light my:ml-auto'>
              {data.currentConditions.windspeed} km/h
            </p>
          </div>
          <div className='flex relative currentSummary__line gap-2 items-center'>
            <Image
              src={humIcon}
              alt='Влажность'
              width={'auto'}
              height={'auto'}
              priority
              className='sm:max-w-[18px] sm:max-h-[18px] sm:mr-[10px]'
            />
            <p>Hum</p>
            <p className='font-light my:ml-auto'>
              {Math.round(data.currentConditions.humidity)} %
            </p>
          </div>
          <div className='flex gap-2 items-center'>
            <Image
              src={uvIndexIcon}
              alt='Индекс'
              width={'auto'}
              height={'auto'}
              priority
              className='sm:max-w-[26px] sm:max-h-[26px]'
            />
            <p>UV index</p>
            <p className='font-light my:ml-auto'>
              {data.currentConditions.uvindex}
            </p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}
