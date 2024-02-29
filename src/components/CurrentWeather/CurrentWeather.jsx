import CurrentDate from '../CurrentDate/CurrentDate'
import CurrentSummary from '../CurrentSummary/CurrentSummary'
import WeatherIcon from '../WeatherIcon/WeatherIcon'

export default function CurrentWeather ({ weatherData }) {
  return (
    <section className='px-16 py-5'>
      {weatherData.currentConditions ? (
        <WeatherIcon
          data={weatherData.currentConditions}
          classList={'w-36 h-36 drop-shadow-lg'}
        />
      ) : (
        <WeatherIcon
          data={weatherData}
          classList={'w-36 h-36 drop-shadow-lg'}
        />
      )}

      <div className='flex text-white py-2 drop-shadow-[-4.51px_2.26px_0.75px_rgba(0,0,0,0.15)]'>
        <h2 className='font-thin text-[164px] leading-[120%] drop-shadow-lg'>
          {weatherData.currentConditions
            ? Math.round(weatherData.currentConditions.temp)
            : '0'}
        </h2>
        <p className='text-3xl p-2.5 tracking-tight drop-shadow-lg'>° C </p>
      </div>
      <CurrentDate data={weatherData} />
      <CurrentSummary data={weatherData} />
    </section>
  )
}
