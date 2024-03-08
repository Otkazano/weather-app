import WeatherIcon from '../WeatherIcon/WeatherIcon'

export default function HoursInfoCard ({ hourData }) {
  return (
    <article className='flex flex-col justify-between h-24 items-center min-w-10 drop-shadow-lg '>
      <h4 hidden={true}>Карточка погоды по часам</h4>
      <p className='font-light'>{hourData.datetime.split([':'])[0]} ч.</p>
      <WeatherIcon data={hourData} classList={'h-10 drop-shadow-lg'} />
      <div className='flex gap-1 font-medium text-lg'>
        <p>{Math.round(hourData.temp)} </p>
        <p>°C</p>
      </div>
    </article>
  )
}
