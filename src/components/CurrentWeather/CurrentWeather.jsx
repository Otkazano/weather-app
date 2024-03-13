import CurrentDate from '../CurrentDate/CurrentDate'
import CurrentSummary from '../CurrentSummary/CurrentSummary'
import WeatherIcon from '../WeatherIcon/WeatherIcon'

export default function CurrentWeather ({ weatherData }) {
  return (
    <section className='px-16 py-5 sm:px-10 sm:py-3 sm:flex sm:flex-col sm:grow xxs:px-4 '>
      <div className='sm:flex sm:gap-3 sm:mb-auto sm:flex-row-reverse sm:justify-end'>
        {weatherData.currentConditions ? (
          <WeatherIcon
            data={weatherData.currentConditions}
            classList={
              'w-36 h-36 drop-shadow-lg xxs:w-32 xxs:h-32 vs:w-28 vs:h-28'
            }
          />
        ) : (
          <WeatherIcon
            data={weatherData}
            classList={
              'w-36 h-36 drop-shadow-lg xxs:w-32 xxs:h-32 vs:w-28 vs:h-28'
            }
          />
        )}

        <div className='flex text-white py-2 drop-shadow-[-4.51px_2.26px_0.75px_rgba(0,0,0,0.15)] sm:py-3 vs:mt-10'>
          <h2 className='font-thin text-[164px] leading-[120%] drop-shadow-lg xxs:text-[150px] vs:text-9xl'>
            {weatherData.currentConditions
              ? Math.round(weatherData.currentConditions.temp)
              : '0'}
          </h2>
          <p className='text-3xl p-2.5 tracking-tight drop-shadow-lg xxs:text-2xl xxs:p-2'>
            ° C{' '}
          </p>
        </div>
      </div>

      <CurrentDate data={weatherData} />
      <CurrentSummary data={weatherData} />
    </section>
  )
}
