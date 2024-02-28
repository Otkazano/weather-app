import Image from 'next/image'
import uvIndexIcon from '@/images/uvIndexIcon.svg'
import windyIcon from '@/images/windyIcon.svg'
import humIcon from '@/images/humIcon.svg'

export default function CurrentSummary ({ data }) {
  return (
    <>
      {data.currentConditions ? (
        <div className='flex text-white gap-10 drop-shadow-lg font-extralight text-xl py-10'>
          <div className='flex relative main__line gap-2 items-center'>
            <Image
              src={windyIcon}
              alt='Скорость ветра'
              width={'auto'}
              height={'auto'}
              priority
            />
            <p>Wind</p>
            <p className='font-light'>{data.currentConditions.windspeed} km/h</p>
          </div>
          <div className='flex relative main__line gap-2 items-center'>
            <Image
              src={humIcon}
              alt='Влажность'
              width={'auto'}
              height={'auto'}
              priority
            />
            <p>Hum</p>
            <p className='font-light'>{Math.round(data.currentConditions.humidity)} %</p>
          </div>
          <div className='flex gap-2 items-center'>
            <Image
              src={uvIndexIcon}
              alt='Индекс'
              width={'auto'}
              height={'auto'}
              priority
            />
            <p>UV index</p>
            <p className='font-light'>{data.currentConditions.uvindex}</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}
