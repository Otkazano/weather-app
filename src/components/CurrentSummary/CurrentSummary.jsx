import './CurrentSummary.css'
import Image from 'next/image'
import uvIndexIcon from '@/images/uvIndexIcon.svg'
import windyIcon from '@/images/windyIcon.svg'
import humIcon from '@/images/humIcon.svg'

export default function CurrentSummary ({ data }) {
  return (
    <>
      {data.currentConditions ? (
        <div className='flex text-white gap-10 drop-shadow-lg font-extralight text-xl py-10 my:gap-3 sm:text-sm my:py-5 sm:font-light vs:gap-2 vs:text-xs'>
          <div className='flex relative currentSummary__line gap-2 items-center vs:gap-1'>
            <Image
              src={windyIcon}
              alt='Скорость ветра'
              width={'auto'}
              height={'auto'}
              priority
              className='sm:w-[20px] sm:h-[20px]'
            />
            <p>Wind</p>
            <p className='font-light my:ml-auto'>
              {data.currentConditions.windspeed} km/h
            </p>
          </div>
          <div className='flex relative currentSummary__line gap-2 items-center vs:gap-1'>
            <Image
              src={humIcon}
              alt='Влажность'
              width={'auto'}
              height={'auto'}
              priority
              className='sm:max-w-[18px] sm:max-h-[18px]'
            />
            <p>Hum</p>
            <p className='font-light my:ml-auto'>
              {Math.round(data.currentConditions.humidity)}%
            </p>
          </div>
          <div className='flex gap-2 items-center vs:gap-1'>
            <Image
              src={uvIndexIcon}
              alt='Индекс'
              width={'auto'}
              height={'auto'}
              priority
              className='sm:max-w-[26px] sm:max-h-[26px]'
            />
            <p className='sm:hidden'>UV index</p>
            <p className='hidden sm:block'>UV in</p>
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
