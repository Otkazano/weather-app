import './SmallInfoCard.css'
import WeatherIcon from '../WeatherIcon/WeatherIcon'

export default function SmallInfoCard ({ dayData }) {
  const dayOfWeek = new Date(dayData.datetime).getDay()
  return (
    <article className='smallInfoCard'>
      <h4 hidden={true}>Карточка погоды</h4>
      <div className='smallInfoCard__tempInfo'>
        <p>{Math.round(dayData.temp)} </p>
        <p>°C</p>
      </div>
      <WeatherIcon data={dayData} classList={'smallInfoCard__icon drop-shadow-lg xxs:w-10'} />
      <p className='smallInfoCard__dayOfWeek'>
        {dayOfWeek === 0 && 'Sun'}
        {dayOfWeek === 1 && 'Mon'}
        {dayOfWeek === 2 && 'Tue'}
        {dayOfWeek === 3 && 'Wed'}
        {dayOfWeek === 4 && 'Thu'}
        {dayOfWeek === 5 && 'Fri'}
        {dayOfWeek === 6 && 'Sat'}
      </p>
    </article>
  )
}
